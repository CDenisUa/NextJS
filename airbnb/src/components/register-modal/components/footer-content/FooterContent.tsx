// Core
import { FC } from "react";
// Images
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
// Hooks
import { useRegisterModal } from "@/hooks";
// Components
import Button from "@/components/button";

const FooterContent: FC = () => {
  const registerModal = useRegisterModal();
  return (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
        outline
      />
      <Button
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {}}
        outline
      />
      <div
        className="
              text-neutral-500 
              text-center 
              mt-4 
              font-light
              "
      >
        <div className="justify-center flex flex-row items-center gap-2">
          <p> Already have an account?</p>
          <p
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={registerModal.onClose}
          >
            Log in
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
