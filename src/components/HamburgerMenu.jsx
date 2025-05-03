import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

const RiveWrapper = () => {
  const stateMachines = "State Machine 1";
  const inputName = "Trigger 1";

  const { rive, RiveComponent } = useRive({
    src: "/src/images/hamburger_menu.riv",
    stateMachines: stateMachines,
    animations: 'to white',
    autoplay: true,
  });

  const toggleInput = useStateMachineInput(
    rive,
    stateMachines,
    inputName
  );

  const handleClick = () => {
    if (toggleInput) {
      toggleInput.fire();
    }
  };

  return <div onClick={handleClick}><RiveComponent /></div>;
};

export default RiveWrapper;
