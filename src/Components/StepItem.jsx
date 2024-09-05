import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Box,
} from "@chakra-ui/react";
//import to animate the stepper collapsing the content
import { Collapse, useDisclosure } from "@chakra-ui/react";

export function StepItem({ onClick, title, children }) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Step
      onClick={() => {
        onClick();
        onToggle();
      }}
    >
      <StepIndicator>
        <StepStatus
          complete={<StepIcon />}
          incomplete={<StepNumber />}
          active={<StepNumber />}
        />
      </StepIndicator>
      <Box flexShrink="100%" minHeight={"60px"}>
        <StepTitle>{title}</StepTitle>
        {/* <StepDescription>{description}</StepDescription> */}
        <Collapse in={isOpen} animateOpacity>
          <StepDescription>{children}</StepDescription>
        </Collapse>
      </Box>
      <StepSeparator />
    </Step>
  );
}
