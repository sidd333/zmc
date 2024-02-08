import React from "react";

import Navbar from "../../components/navbar/navbar";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/features/auth/authSlice";
import Banner from "../../components/banner/banner";
const Home = () => {
  const dispatch = useDispatch();
  let [isOpen, setIsOpen] = useState(true);
  const [details, setDetails] = useState({ name: "", password: "" });

  const enterDetails = (e) => {
    const data = e.target.name;
    setDetails({ ...details, [data]: e.target.value });
  };

  function submit(e) {
    e.preventDefault();
    dispatch(signUp(details));
  }
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Navbar openModal={openModal} />
      <Banner />
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="text-lg font-medium leading-6 text-gray-900 flex justify-between mb-7"
                  >
                    <h3>Sign-Up</h3>

                    <button type="button" className="" onClick={closeModal}>
                      <AiOutlineClose />
                    </button>
                  </Dialog.Title>
                  <div className="mt-2">
                    <form>
                      <div className="sm:col-span-4">
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:sm:leading-6 h-14 text-lg"
                              placeholder="Username"
                              onChange={enterDetails}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="sm:col-span-4 mt-4">
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                              type="text"
                              name="password"
                              id="password"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:sm:leading-6 h-14 text-lg"
                              placeholder="Password"
                              onChange={enterDetails}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex h-6 items-center mt-7">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600  focus:ring-indigo-600"
                        />
                        <p className="text-sm text-gray-500 ml-2">
                          I agree to Zomato's Terms of Service, Privacy Policy
                          and Content Policies
                        </p>
                      </div>
                    </form>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={submit}
                    >
                      submit
                      {/* submit  */}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Home;
