import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function Modal({ name, address, pincode, phoneNumber, setName, setAddress, setPincode, setPhoneNumber, buyNow }) {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
        console.log("Modal is closed:", isOpen);  // Debugging log for state
    }

    function openModal() {
        setIsOpen(true);
        console.log("Modal is opened:", isOpen);  // Debugging log for state
    }

    // Form validation
    const handleSubmit = () => {
        if (!name || !address || !pincode || !phoneNumber) {
            alert("Please fill all fields");
            return;
        }

        // eslint-disable-next-line react/prop-types
        if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
            alert("Please enter a valid 10-digit phone number");
            return;
        }

        // eslint-disable-next-line react/prop-types
        if (pincode.length !== 6 || isNaN(pincode)) {
            alert("Please enter a valid 6-digit pincode");
            return;
        }

        buyNow();
        closeModal();
    };

    return (
        <>
            <div className="text-center rounded-lg text-white font-bold">
                <button
                    type="button"
                    onClick={openModal}
                    className="w-full bg-violet-600 py-2 text-center rounded-lg text-white font-bold"
                >
                    Buy Now
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all bg-white">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Enter Address Details</h3>
                                    
                                    <form className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Enter Full Name</label>
                                            <input
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                type="text"
                                                id="name"
                                                className="border border-gray-300 rounded-lg w-full p-2"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Enter Full Address</label>
                                            <input
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                type="text"
                                                id="address"
                                                className="border border-gray-300 rounded-lg w-full p-2"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900">Enter Pincode</label>
                                            <input
                                                value={pincode}
                                                onChange={(e) => setPincode(e.target.value)}
                                                type="number"
                                                id="pincode"
                                                className="border border-gray-300 rounded-lg w-full p-2"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900">Enter Mobile Number</label>
                                            <input
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                type="tel"
                                                id="phoneNumber"
                                                className="border border-gray-300 rounded-lg w-full p-2"
                                                required
                                            />
                                        </div>
                                    </form>

                                    <div className="mt-6">
                                        <button
                                            onClick={handleSubmit}
                                            className="w-full bg-violet-600 text-white py-2 rounded-lg font-medium hover:bg-violet-700"
                                        >
                                            Order Now
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
}
