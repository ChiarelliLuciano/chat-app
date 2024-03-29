"use client";
import axios from "axios";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import Modal from "@/app/components/Modal";
import Input from "@/app/components/Input/Input";
import Select from "@/app/components/Input/Select";
import Button from "@/app/components/Button";

interface GroupChatModalProps {
  isOpen?: boolean;
  onClose: () => void;
  users: User[];
}

const GroupChatModal: React.FC<GroupChatModalProps> = ({
  isOpen,
  onClose,
  users,
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      members: [],
    },
  });

  const members = watch("members");

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    axios
      .post("/api/conversations", {
        ...data,
        isGroup: true,
      })
      .then(() => {
        router.refresh();
        onClose();
      })
      .catch(() => toast.error("Algo salió mal"))
      .finally(() => setLoading(false));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Nuevo Grupo
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Crea un chat con varias personas!
            </p>
            <div className="mt-10 flex-flex-col gap-y-8">
              <Input
                register={register}
                label="Nombre"
                id="name"
                disabled={loading}
                required
                errors={errors}
              />
              <Select
                disabled={loading}
                label="Integrantes"
                onChange={(value) =>
                  setValue("members", value, { shouldValidate: true })
                }
                value={members}
                options={users.map((user) => ({
                  value: user.id,
                  label: user.name,
                }))}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Button disabled={loading} onClick={onClose} type="button" secondary>
            Cancelar
          </Button>
          <Button disabled={loading} type="submit">
            Crear
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default GroupChatModal;
