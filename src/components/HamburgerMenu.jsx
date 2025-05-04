import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

export default function HamburgerMenu() {
  // Define the state machine and input names for the Rive animation
  const stateMachines = "State Machine 1";
  const inputName = "Trigger 1";

  const { rive, RiveComponent } = useRive({
    src: "/src/images/hamburger_menu.riv",
    stateMachines: stateMachines,
    autoplay: true,
  });

  const toggleInput = useStateMachineInput(
    rive,
    stateMachines,
    inputName
  );

  // Function to handle the click event and trigger the animation
  function handleClick() {
    if (toggleInput) {
      toggleInput.fire();
    }
  }

  return (
    <div className="hamburgerMenu" onClick={handleClick}>
      <div className="hamburgerMenuIcon">
        <RiveComponent />
      </div>
      <p className="menuText">Menu</p>
    </div>
  );
} ;