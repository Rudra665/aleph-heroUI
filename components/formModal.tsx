"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
  DatePicker,
  Textarea,
} from "@heroui/react";
import { useModalStore } from "@/store/modalStore";

export default function BookAdventureModal() {
  const modalOpen = useModalStore((s: any) => s.modalOpen);
  const openModal = useModalStore((s: any) => s.openModal);
  const closeModal = useModalStore((s: any) => s.closeModal);

  return (
    <div className="flex justify-center">
      <Modal
        isOpen={modalOpen}
        onOpenChange={(open) => (open ? openModal() : closeModal())}
        placement="center"
        size="2xl"
        scrollBehavior="inside">
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 border-b pb-2">
                <h2 className="text-xl font-semibold">Book Your Adventure</h2>
                <p className="text-sm text-default-500">
                  Fill in your travel preferences and we&apos;ll create the
                  perfect journey for you.
                </p>
              </ModalHeader>
              <ModalBody>
                {/* contact us text */}
                <div className="text-sm">
                  <p className="font-semibold mb-1">Contact us directly:</p>
                  <p className="text-default-600">info@aleph.co.in</p>
                  <p className="text-default-600">
                    (+91) 94545 60032 | (+91) 96964 04230
                  </p>
                </div>

                {/* Contact information */}
                <section className="space-y-4">
                  <h3 className="text-base font-semibold">
                    Your Contact Information
                  </h3>
                  <Input
                    label="Full Name"
                    placeholder="Enter your full name"
                    variant="bordered"
                    isRequired
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      label="Email"
                      placeholder="your@email.com"
                      type="email"
                      variant="bordered"
                      isRequired
                    />
                    <Input
                      label="Phone Number"
                      placeholder="(+91) 9882222700"
                      variant="bordered"
                    />
                  </div>
                </section>

                {/* Trip details */}
                <section className="space-y-4">
                  <h3 className="text-base font-semibold">Trip Details</h3>

                  <Select
                    label="Destination"
                    placeholder="Select your destination"
                    variant="bordered"
                    startContent={<span className="text-danger-500">📍</span>}>
                    <SelectItem key="leh">Leh</SelectItem>
                    <SelectItem key="spiti">Spiti</SelectItem>
                    <SelectItem key="ladakh">Ladakh</SelectItem>
                  </Select>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <DatePicker
                      label="Start Date"
                      variant="bordered"
                      startContent={<span className="text-danger-500">📅</span>}
                    />
                    <DatePicker
                      label="End Date"
                      variant="bordered"
                      startContent={<span className="text-danger-500">📅</span>}
                    />
                  </div>

                  <Select
                    label="Number of Travelers"
                    placeholder="Select number of travelers"
                    variant="bordered"
                    startContent={<span className="text-danger-500">👤</span>}>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <SelectItem key={i + 1}>{i + 1}</SelectItem>
                    ))}
                  </Select>

                  <Textarea
                    label="Additional Preferences"
                    placeholder="Tell us about your preferences, activities, budget, etc."
                    variant="bordered"
                  />
                </section>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={closeModal}>
                  Cancel
                </Button>
                <Button color="danger" onPress={closeModal}>
                  Submit Booking Request
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
