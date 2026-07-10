"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useContactModal } from "@/components/ContactModal";

export default function ContactPage() {
  const { open } = useContactModal();
  const router = useRouter();

  useEffect(() => {
    open();
    router.replace("/");
  }, [open, router]);

  return null;
}
