"use client";

import { useState } from "react";
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
import { addToast } from "@heroui/toast"; // <-- HeroUI toast[web:160]
import { useModalStore } from "@/store/modalStore";

export default function BookAdventureModal() {
  const modalOpen = useModalStore((s: any) => s.modalOpen);
  const openModal = useModalStore((s: any) => s.openModal);
  const closeModal = useModalStore((s: any) => s.closeModal);

  // form state (added)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState<string | undefined>();
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);
  const [travelers, setTravelers] = useState<string | undefined>();
  const [preferences, setPreferences] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/book-trip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          destination,
          startDate,
          endDate,
          travelers,
          preferences,
        }),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        addToast({
          title: "Booking request sent",
          description: "We’ll contact you shortly.",
          color: "success", // green bottom-left
        });
        closeModal();
      } else {
        addToast({
          title: "Failed to send",
          description: data.error || "Please try again.",
          color: "danger", // red bottom-left
        });
      }
    } catch (err: any) {
      addToast({
        title: "Error",
        description: err.message || "Something went wrong.",
        color: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <Modal
        isOpen={modalOpen}
        onOpenChange={(open) => (open ? openModal() : closeModal())}
        placement="center"
        size="2xl"
        classNames={{
          base: "bg-background text-foreground",
          header: "bg-background",
          body: "bg-background",
          footer: "bg-background",
        }}
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
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      label="Email"
                      placeholder="your@email.com"
                      type="email"
                      variant="bordered"
                      isRequired
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                      label="Phone Number"
                      placeholder="(+91) 9882222700"
                      variant="bordered"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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
                    startContent={<span className="text-danger-500">📍</span>}
                    selectedKeys={destination ? [destination] : []}
                    onSelectionChange={(keys) =>
                      setDestination(Array.from(keys)[0] as string)
                    }>
                    <SelectItem key="leh">Leh</SelectItem>
                    <SelectItem key="spiti">Spiti</SelectItem>
                    <SelectItem key="ladakh">Ladakh</SelectItem>
                  </Select>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <DatePicker
                      label="Start Date"
                      variant="bordered"
                      startContent={<span className="text-danger-500">📅</span>}
                      value={startDate}
                      onChange={setStartDate}
                    />
                    <DatePicker
                      label="End Date"
                      variant="bordered"
                      startContent={<span className="text-danger-500">📅</span>}
                      value={endDate}
                      onChange={setEndDate}
                    />
                  </div>

                  <Select
                    label="Number of Travelers"
                    placeholder="Select number of travelers"
                    variant="bordered"
                    startContent={<span className="text-danger-500">👤</span>}
                    selectedKeys={travelers ? [travelers] : []}
                    onSelectionChange={(keys) =>
                      setTravelers(Array.from(keys)[0] as string)
                    }>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <SelectItem key={i + 1}>{i + 1}</SelectItem>
                    ))}
                  </Select>

                  <Textarea
                    label="Additional Preferences"
                    placeholder="Tell us about your preferences, activities, budget, etc."
                    variant="bordered"
                    value={preferences}
                    onChange={(e) => setPreferences(e.target.value)}
                  />
                </section>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={closeModal}>
                  Cancel
                </Button>
                <Button
                  color="danger"
                  onPress={handleSubmit}
                  isLoading={loading}>
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
