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
  hasDonateBtn,
  hasBayTicketBtn,
  hasMonthlySupport,
}) => {
  const [agreed, setAgreed] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevents hydration mismatch by not rendering on SSR
  }

  const handleAgreed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreed(e.target.checked);
  };
  const hundleButtonsClick = () => {
    setOpen(false);
  };

  return (
    <div className="flex max-w-[768px] flex-col justify-center gap-2 md:justify-start">
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <span className="flex gap-2 max-sm:justify-center">
            {hasDonateBtn && (
              <Button
                label={donatePayLink.title}
                variant="primary"
                className="max-[380px]:w-full"
              />
            )}
            {hasBayTicketBtn && (
              <Button
                label={ticketPayLink.title}
                variant="secondary"
                className="max-[380px]:w-full"
              />
            )}
            {hasMonthlySupport && (
              <Button label={monthlyDonatePayLink.title} variant="primary" />
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
                  Maryna
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
          <AlertDialogFooter
            className="flex max-sm:gap-2"
            onClick={hundleButtonsClick}
          >
            {hasDonateBtn && (
              <Button
                url={donatePayLink.url}
                label="Proceed to Donate"
                variant="primary"
                secure
                disabled={!agreed}
              />
            )}
            {hasBayTicketBtn && (
              <Button
                url={ticketPayLink.url}
                label="Proceed to Buy Ticket"
                variant="primary"
                secure
                disabled={!agreed}
              />
            )}
            {hasMonthlySupport && (
              <Button
                url={monthlyDonatePayLink.url}
                label="Proceed to Monthly Support"
                variant="primary"
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
