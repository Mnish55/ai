"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("12e19600-9315-4954-b79f-f3fbe2edc5de");
  }, []);

  return null;
};