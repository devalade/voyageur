import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Barcode from 'react-barcode';

import { api } from "@/utils/api";
import {CalendarDays, MapPin} from "lucide-react";
import MainLayout from "@/components/main-layout";
import {FlightCard} from "@/components/flight-card";

const Home: NextPage = () => {
  const cities = api.city.getAll.useQuery();

  return (
    <MainLayout title="Accueil">
      <section className="max-w-4xl w-full mx-auto grid grid-cols-2 mt-12 ">
          <div>
              <div>
                  <p className="text-5xl font-semibold font-title text-gray-100">Your world is</p>
                  <p className="text-5xl font-semibold font-title text-gray-100">worth sharing</p>
              </div>

              <form action="" className="mt-8 space-y-2.5">
                  <div>
                      <label className="text-gray-100 text-sm">Départ</label>
                      <div className="bg-gray-50 flex rounded-sm divide-x-2 divide-dashed divide-gray-800 p-1.5">
                          <select className="w-full appearance-none outline-none focus:outline-none px-2.5 py-2 text-sm text-gray-700" >
                              {cities.data !== undefined && cities.data?.map(city => (<option key={city.id}  value={city.id}>{`${city.name} - ${city.countryName}`}</option>))}
                          </select>

                          <span className="w-16  flex items-center justify-center">
                              <MapPin className="w-4 h-4 stroke-gray-800" />
                          </span>
                      </div>
                  </div>
                    <div className="mt-4">
                      <label className="text-gray-100 text-sm">Arrivée</label>
                      <div className="bg-gray-50 flex rounded-sm divide-x-2 divide-dashed divide-gray-800 p-1.5">
                          <select className="w-full appearance-none outline-none focus:outline-none px-2.5 py-2 text-sm text-gray-700" >
                              {cities.data !== undefined && cities.data?.map(city => (<option key={city.id}  value={city.id}>{`${city.name} - ${city.countryName}`}</option>))}
                          </select>
                          <span className="w-16  flex items-center justify-center">
                              <MapPin className="w-4 h-4 stroke-gray-800" />
                          </span>
                      </div>
                    </div>

                  <div className="mt-4">
                      <label className="text-gray-100 text-sm">Date</label>
                      <div className="bg-gray-50 flex rounded-sm divide-x-2 divide-dashed divide-gray-800 p-1.5">
                          <input type="date" className="w-full appearance-none outline-none focus:outline-none px-2.5 py-2 text-sm text-gray-700" />
                          <span className="w-16  flex items-center justify-center">
                              <CalendarDays className="w-4 h-4 stroke-gray-800" />
                          </span>
                      </div>
                  </div>

                  <div className=" flex items-center space-x-3.5 text-gray-100 text-sm">
                      <label htmlFor="" className=" flex items-center uppercase space-x-1">
                          <input type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                          <span>Direct</span>
                      </label>

                      <label htmlFor="" className=" flex items-center uppercase space-x-1">
                          <input type="radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                          <span>Escale</span>
                      </label>
                  </div>

                  <div className="pt-4">
                    <button className="bg-orange-600 text-orange-100  px-10 py-4 rounded-full text-xs font-semibold">BOOK NOW</button>
                  </div>
              </form>
          </div>
          <div className="flex items-center justify-end ">
              <FlightCard />
          </div>
      </section>
    </MainLayout>
  );
};

export default Home;
