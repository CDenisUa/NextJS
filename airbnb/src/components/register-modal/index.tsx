"use client";
// Core
import { FC, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// Images
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
// Hooks
import { useRegisterModal } from "@/hooks";
// Components
import { Modal } from "@/components";
import BodyContent from "./components/body-content/BodyContent";
import FooterContent from "./components/footer-content/FooterContent";

const RegisterModal: FC = () => {
  const registerModal = useRegisterModal();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => toast.error('Something went wrong!'))
      .finally(() => setIsLoading(true));
  };

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={
        <BodyContent
          isLoading={isLoading}
          register={register}
          errors={errors}
        />
      }
      footer={
        <FooterContent />
      }
    />
  );
};

export default RegisterModal;
