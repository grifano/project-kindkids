"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import {
  ticketPayLink,
  donatePayLink,
  monthlyDonatePayLink,
} from "@/constants/payments";

import Link from "next/link";
import Button from "./ui/ButtonOld";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MdClose } from "react-icons/md";

interface CTAButtonsProps {
  hasDonateBtn?: boolean;
  hasBayTicketBtn?: boolean;
  hasMonthlySupport?: boolean;
  children?: ReactNode;
}

const CTAButtons: FC<CTAButtonsProps> = ({
  children,
  hasDonateBtn = true,
  hasBayTicketBtn,
  hasMonthlySupport,
}) => {
  const [agreed, setAgreed] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevents hydration mismatch by not rendering on SSR
  }

  const handleAgreed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreed(e.target.checked);
  };

  return (
    <div className="flex max-w-[768px] flex-col gap-2">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <span className="flex items-center gap-2">
            {hasDonateBtn && (
              <Button label={donatePayLink.title} variant="blueSecondary" />
            )}
            {hasBayTicketBtn && (
              <Button label={ticketPayLink.title} variant="bluePrimary" />
            )}
          </span>
        </AlertDialogTrigger>
        <AlertDialogContent className="text-primary-deepBlue">
          <AlertDialogHeader className="relative">
            <AlertDialogCancel className="absolute right-0 top-0 h-8 w-6 border-none">
              <MdClose />
            </AlertDialogCancel>
            <AlertDialogTitle className="font-lora text-xl font-bold md:text-2xl">
              Are you sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base text-inherit md:text-lg">
              <span className="mb-4 pt-4">
                Please note that Stripe charges a processing fee for each
                transaction. If you prefer a direct donation without fees,
                contact{" "}
                <Link href="/#contact" className="font-bold hover:underline">
                  Marina
                </Link>{" "}
                for bank details.
              </span>
              <label className="mt-2 inline-flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={handleAgreed}
                  className="h-4 w-4"
                />
                <span>I understand and accept the Stripe fee.</span>
              </label>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex justify-between">
            {hasDonateBtn && (
              <Button
                url={donatePayLink.url}
                label="Proceed to Donate"
                variant="blueSecondary"
                secure
                disabled={!agreed}
              />
            )}
            {hasBayTicketBtn && (
              <Button
                url={ticketPayLink.url}
                label="Proceed to Buy Ticket"
                variant="bluePrimary"
                secure
                disabled={!agreed}
              />
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CTAButtons;
