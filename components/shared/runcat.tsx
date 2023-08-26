import * as Menubar from "@radix-ui/react-menubar";
import { DotFilledIcon } from "@radix-ui/react-icons";
import React from "react";

interface RadioCatItem {
  id: string;
  name: string;
  img: string;
  color: string;
}

const RADIO_CAT: RadioCatItem[] = [
  {
    id: "gaming_cat",
    name: "Gaming Cat",
    img: "/runcat/gaming_cat.png",
    color: "invert-0",
  },
  {
    id: "party_parrot",
    name: "Party Parrot",
    img: "/runcat/party_parrot.png",
    color: "invert-0",
  },
  {
    id: "slime",
    name: "Slime",
    img: "/runcat/slime.gif",
    color: "invert-0",
  },
  {
    id: "sushi",
    name: "Sushi",
    img: "/runcat/sushi.png",
    color: "invert-0",
  },
  {
    id: "dog_dance",
    name: "Dog Dance",
    img: "/runcat/dog-dance.gif",
    color: "invert-0",
  },
  {
    id: "shiba",
    name: "Shiba Inu",
    img: "/runcat/shiba.gif",
    color: "invert-0",
  },
  {
    id: "fish",
    name: "Fish",
    img: "/runcat/fish.gif",
    color: "invert-0",
  },
  {
    id: "cat",
    name: "Cat",
    img: "/runcat/cat.gif",
    color: "invert-0",
  },
  {
    id: "cat_speed1",
    name: "Shaking",
    img: "/runcat/cat-dance1.gif",
    color: "invert-0",
  },
  {
    id: "cat_speed2",
    name: "Shaking Speed x2",
    img: "/runcat/cat-dance2.gif",
    color: "invert-0",
  },
  {
    id: "cat_speed3",
    name: "Shaking Speed x3",
    img: "/runcat/cat-dance3.gif",
    color: "invert-0",
  },
  {
    id: "frog_coffee",
    name: "Frog Coffee",
    img: "/runcat/frog-coffee.gif",
    color: "invert-0",
  },
  {
    id: "frog_punch1",
    name: "Punch",
    img: "/runcat/frog-punch1.gif",
    color: "invert-0",
  },
  {
    id: "frog_punch2",
    name: "Punch x2",
    img: "/runcat/frog-punch2.gif",
    color: "invert-0",
  },
  {
    id: "pikachu",
    name: "Pikachu",
    img: "/runcat/pikachu.gif",
    color: "invert-0",
  },
  {
    id: "thinkaboutit",
    name: "Think about it",
    img: "/runcat/thinkaboutit.gif",
    color: "invert-0",
  },
];

export default function RunCat() {
  const [runCatSelection, setrunCatSelection] = React.useState<string | null>(
    null
  );
  const selectedItem = RADIO_CAT.find((item) => item.id === runCatSelection);
  const loadingImage = "/runcat/dots.png";

  React.useEffect(() => {
    const storedRunCatSelection = localStorage.getItem("runCatSelection");
    if (storedRunCatSelection) {
      setrunCatSelection(storedRunCatSelection);
    } else {
      setrunCatSelection("frog_coffee");
    }
  }, []);

  React.useEffect(() => {
    if (runCatSelection !== null) {
      localStorage.setItem("runCatSelection", runCatSelection);
    }
  }, [runCatSelection]);

  return (
    <>
      <Menubar.Menu>
        <Menubar.Trigger className="MenubarTrigger btn-topbar btn-runcat">
          <img
            src={selectedItem ? selectedItem.img : loadingImage}
            className={selectedItem ? selectedItem.color : "invert"}
            width={30}
            height={30}
            alt="runcat"
          />
        </Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Content
            className="MenubarContent"
            align="start"
            sideOffset={5}
            alignOffset={-14}
          >
            <Menubar.RadioGroup
              value={runCatSelection ?? undefined}
              onValueChange={setrunCatSelection}
            >
              {RADIO_CAT.map((item) => (
                <Menubar.RadioItem
                  className="MenubarRadioItem inset"
                  key={item.id}
                  value={item.id}
                >
                  <Menubar.ItemIndicator className="MenubarItemIndicator">
                    <DotFilledIcon />
                  </Menubar.ItemIndicator>
                  <img
                    src={item.img}
                    className={`mx-1 ${item.color}`}
                    width={22}
                    height={22}
                    alt={item.name}
                  />
                  &nbsp;{item.name}
                </Menubar.RadioItem>
              ))}
            </Menubar.RadioGroup>
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </>
  );
}
