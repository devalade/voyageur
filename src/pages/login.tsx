import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "@/utils/api";
import { Key, Mail } from "lucide-react";
import {ChangeEvent, FormEventHandler, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {signIn} from "next-auth/react";
import MainLayout from "@/components/main-layout";

const Home: NextPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();
    // const register = api.auth.register.useMutation().mutate;

    useEffect(() => {
        if(router.query.email) {
            setEmail(router.query.email as unknown as string);
        }
    }, [router.query.email])

    function onEmailChange(e: ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    }

    function onPasswordChange(e: ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log({ email, password });
        signIn('credentials', {
            email: email,
            password: password,
            redirect: false,
        }).then(res => {
            console.log({ res });
            if(res) {
                void router.push('/');
            }
        }).catch(console.log)
    }

    return (
       <MainLayout title="Login">
            <section className="max-w-md w-full mx-auto mt-20">
                <div>
                    <h4 className="text-lg font-semibold text-gray-100">Login </h4>
                    <form onSubmit={onSubmit} className="mt-8 space-y-2.5">
                        <div>
                            <label className="text-gray-100 text-sm">Email</label>
                            <div className="bg-gray-50 flex rounded-sm divide-x-2 divide-dashed divide-gray-800 p-1.5">
                                <input value={email} onChange={onEmailChange} type="email" className="w-full appearance-none outline-none focus:outline-none px-2.5 py-2 text-sm text-gray-700" />
                                <span className="w-16  flex items-center justify-center">
                                    <Mail className="w-4 h-4 stroke-gray-800" />
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
                            <button className="bg-orange-600 text-orange-100  px-10 py-4 rounded-full text-xs font-semibold">Se connecter</button>
                        </div>
                    </form>
                </div>

            </section>
       </MainLayout>
    );
};

export default Home;
