import React from "react";
import {
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Button,
} from "@chakra-ui/react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Account() {
  let [value, setValue] = React.useState("");

  return (
    <>
      <div className="bg-white p-4">
        <div className="flex items-start gap-x-2 mb-2">
          <FormControl>
            <FormLabel>Full name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input type="text" />
          </FormControl>
        </div>
        <div className="flex items-start gap-x-2 mb-2">
          <FormControl>
            <FormLabel>Profession</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Birthday</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Phone</FormLabel>
            <Input type="number" />
          </FormControl>
        </div>

        <FormControl className="mb-3">
          <FormLabel>Bio</FormLabel>
          <Textarea
            value={value}
            resize={"none"}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Write here..."
            size="sm"
          />
        </FormControl>
        <div className="flex justify-end">
          <Button size={'sm'} colorScheme="blue">Save changes</Button>
        </div>
      </div>
    </>
  );
}
