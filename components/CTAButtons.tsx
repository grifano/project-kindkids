"use client";

import { FC, ReactNode, useState } from "react";
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

  const handleAgreed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreed(e.target.checked);
  };

  return (
    <div className="flex max-w-[768px] flex-col gap-2">
      <div className="flex items-center gap-2">
        <AlertDialog>
          <AlertDialogTrigger className="flex gap-2">
            {children}
          </AlertDialogTrigger>
          <AlertDialogContent className="text-primary-deepBlue">
            <AlertDialogHeader className="relative">
              <AlertDialogCancel className="absolute right-0 top-0 h-8 w-6 border-none">
                <MdClose />
              </AlertDialogCancel>
              <AlertDialogTitle className="font-lora text-xl font-bold md:text-2xl">
                Are you absolutely sure?
              </AlertDialogTitle>
              <AlertDialogDescription className="text-base text-inherit md:text-lg">
                {/* Info */}
                <p className="mb-4 pt-4">
                  Please note that Stripe charges a processing fee for each
                  donation. If you prefer to make a direct donation without
                  fees, please contact{" "}
                  <Link
                    href="/#contact"
                    className="font-bold hover:underline"
                    aria-label="contact page"
                  >
                    Marina
                  </Link>{" "}
                  for bank details.
                </p>
                {/* Checkbox accept fee */}
                <label className="inline-flex cursor-pointer items-center gap-2">
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
              {/* <Button label="Contact" variant="link" className="mr-auto" /> */}
              {hasDonateBtn && (
                <Button
                  url={donatePayLink.url}
                  label={donatePayLink.title}
                  variant="blueSecondary"
                  secure
                  disabled={!agreed}
                />
              )}
              {hasBayTicketBtn && (
                <Button
                  url={ticketPayLink.url}
                  label={ticketPayLink.title}
                  variant="bluePrimary"
                  secure
                  disabled={!agreed}
                />
              )}
              {hasMonthlySupport && (
                <Button
                  url={monthlyDonatePayLink.url}
                  label={monthlyDonatePayLink.title}
                  variant="primary"
                  secure
                  disabled={!agreed}
                />
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default CTAButtons;
