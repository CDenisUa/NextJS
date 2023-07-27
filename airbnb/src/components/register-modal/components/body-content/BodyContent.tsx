"use client";
// Core
import { FC } from "react";
// Types
import { BodyContentPropTypes } from "./BodyContent.types";
// Components
import Heading from "../heading/Heading";
import { Input } from "@/components";

const BodyContent: FC<BodyContentPropTypes> = (props) => {
  const { isLoading, register, errors } = props;
  return (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
};

export default BodyContent;
