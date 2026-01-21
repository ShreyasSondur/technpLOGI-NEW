import img1Rectangle4PeopleLookingAtAShelfWithDesignerPiecesOnDisplay from "figma:asset/ed741b363db4dd72721da8b2332e449eef09b095.png";
import imgCRh92Y2JGpKaNd3CbCk7LmTg1N0Png from "figma:asset/8383faf3237cd34633e3d18cfaae52c2cf347334.png";
import img3Rectangle7AttendeesChattingDuringABreakInTheEvent from "figma:asset/1b8f7946d770bdfd1781d01583c6173fb6ec4e42.png";

function Component1Rectangle4PeopleLookingAtAShelfWithDesignerPiecesOnDisplay() {
  return (
    <div className="absolute inset-[127.46px_964.8px_0_0]" data-name="1 → Rectangle 4 → People looking at a shelf with designer pieces on display.">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[132.06%] left-0 max-w-none top-[-16.03%] w-full" src={img1Rectangle4PeopleLookingAtAShelfWithDesignerPiecesOnDisplay} />
      </div>
    </div>
  );
}

function CRh92Y2JGpKaNd3CbCk7LmTg1N0Png() {
  return (
    <div className="absolute inset-[0_-1px_0_0] overflow-clip" data-name="CRh92Y2jGPKaNd3CbCK7lmTg1n0.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.21%] left-0 max-w-none top-[-0.1%] w-full" src={imgCRh92Y2JGpKaNd3CbCk7LmTg1N0Png} />
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="absolute inset-[174.38px_475.19px_0_475.2px] overflow-clip" data-name="2">
      <CRh92Y2JGpKaNd3CbCk7LmTg1N0Png />
    </div>
  );
}

function Component3Rectangle7AttendeesChattingDuringABreakInTheEvent() {
  return (
    <div className="absolute inset-[80px_0_0_964.8px]" data-name="3 → Rectangle 7 → Attendees chatting during a break in the event.">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[121.38%] left-0 max-w-none top-[-10.69%] w-full" src={img3Rectangle7AttendeesChattingDuringABreakInTheEvent} />
      </div>
    </div>
  );
}

export default function ImGs() {
  return (
    <div className="relative size-full" data-name="IMGs">
      <Component1Rectangle4PeopleLookingAtAShelfWithDesignerPiecesOnDisplay />
      <Component />
      <Component3Rectangle7AttendeesChattingDuringABreakInTheEvent />
    </div>
  );
}