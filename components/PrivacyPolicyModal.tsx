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

const PrivacyPolicyModal = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <span className="underline hover:text-primary-purple">
          Privacy Policy
        </span>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Privacy Policy</AlertDialogTitle>
          <AlertDialogDescription className="text-base text-primary-deepBlue">
            <p className="mb-2">
              We respect your privacy. When you use our contact form, your name,
              email address, and message are sent directly to our team via
              email. We do not store this information on our website or share it
              with anyone.
            </p>
            <p className="mb-2">
              We use your message only to respond to your inquiry or thank you
              for your support. Your data is processed securely and handled with
              care.
            </p>
            <p>
              If you would like us to delete your message, please contact us at
              [email@example.com]. By submitting the form, you consent to this
              use of your information.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Ok, I'm undersatnd</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PrivacyPolicyModal;
