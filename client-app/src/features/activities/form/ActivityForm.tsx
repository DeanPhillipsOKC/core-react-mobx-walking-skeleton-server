import React from "react";
import { Segment, Form, Button } from "semantic-ui-react";

interface IProps {
    closeForm: () => void;
}

export const ActivityForm: React.FC<IProps> = ({closeForm}) => {
  return (
    <Segment clearing>
      <Form>
        <Form.Input placeholder="Title"></Form.Input>
        <Form.TextArea placeholder="Description" rows={2}></Form.TextArea>
        <Form.Input placeholder="Category"></Form.Input>
        <Form.Input type="date"></Form.Input>
        <Form.Input placeholder="City"></Form.Input>
        <Form.Input placeholder="Venue"></Form.Input>
        <Button
          floated="right"
          positive
          type="submit"
          content="Submit"
        ></Button>
        <Button onClick={closeForm} floated="right" type="button" content="Cancel"></Button>
      </Form>
    </Segment>
  );
};
