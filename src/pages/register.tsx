import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import { Key, Mail, User} from "lucide-react";
import {ChangeEvent, useState} from "react";
import {useRouter} from "next/router";
import MainLayout from "@/components/main-layout";

const Home: NextPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const router = useRouter();
    const register = api.auth.register.useMutation().mutate;

    function onEmailChange(e: ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    }

    function onPasswordChange(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    function onFirstNameChange(e: ChangeEvent<HTMLInputElement>) {
        setFirstName(e.target.value);
    }

    function onLastNameChange(e: ChangeEvent<HTMLInputElement>) {
        setLastName(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        register({ email, lastName, firstName, password }, {
            onSuccess() {
                void router.push(`/login?email=${email}`);
            }
        });
    }

    return (
        <MainLayout title="Register">
                <section className="max-w-md w-full mx-auto mt-20">
                    <div>
                        <h4 className="text-lg font-semibold text-gray-100">Register </h4>
                        <form onSubmit={onSubmit} className="mt-8 space-y-2.5">
                            <div>
                                <label className="text-gray-100 text-sm">Email</label>
                                <div className="bg-gray-50 flex rounded-sm divide-x-2 divide-dashed divide-gray-800 p-1.5">
                                    <input onChange={onEmailChange} type="email" className="w-full appearance-none outline-none focus:outline-none px-2.5 py-2 text-sm text-gray-700" />
                                    <span className="w-16  flex items-center justify-center">
                                  <Mail className="w-4 h-4 stroke-gray-800" />
                              </span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="text-gray-100 text-sm">Nom</label>
                                <div className="bg-gray-50 flex rounded-sm divide-x-2 divide-dashed divide-gray-800 p-1.5">
                                    <input onChange={onLastNameChange} className="w-full appearance-none outline-none focus:outline-none px-2.5 py-2 text-sm text-gray-700" />
                                    <span className="w-16  flex items-center justify-center">
                                  <User className="w-4 h-4 stroke-gray-800" />
                              </span>
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="text-gray-100 text-sm">Prénom</label>
                                <div className="bg-gray-50 flex rounded-sm divide-x-2 divide-dashed divide-gray-800 p-1.5">
                                    <input onChange={onFirstNameChange} className="w-full appearance-none outline-none focus:outline-none px-2.5 py-2 text-sm text-gray-700" />
                                    <span className="w-16  flex items-center justify-center">
                                  <User className="w-4 h-4 stroke-gray-800" />
                              </span>
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="text-gray-100 text-sm">Mot de passe</label>
                                <div className="bg-gray-50 flex rounded-sm divide-x-2 divide-dashed divide-gray-800 p-1.5">
                                    <input onChange={onPasswordChange} type="password" className="w-full appearance-none outline-none focus:outline-none px-2.5 py-2 text-sm text-gray-700" />
                                    <span className="w-16  flex items-center justify-center">
                                  <Key className="w-4 h-4 stroke-gray-800" />
                              </span>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button className="bg-orange-600 text-orange-100  px-10 py-4 rounded-full text-xs font-semibold">S'enregistrer</button>
                            </div>
                        </form>
                    </div>

                </section>
            </MainLayout>
    );
};

export default Home;
