(function () {
  function delay() {
    const delaySendTag = document.querySelector(
      "button[aria-label='More send options']"
    );
    if (delaySendTag) {
      delaySendTag.click();

      setTimeout(() => {
        const sendLaterBtn = document.querySelectorAll(
          "button.ms-ContextualMenu-link"
        )[1];
        if (sendLaterBtn) {
          sendLaterBtn.click();

          setTimeout(() => {
            const { date, time } = getCurTime();
            const dateTag = document.querySelector(
              ".ms-DatePicker-event--without-label"
            ).previousSibling;
            const timeTag = document.querySelector("input.ms-ComboBox-Input");
            const dropDowntag = document.querySelector(
              "button.ms-Button--icon.ms-ComboBox-CaretDown-button"
            );
            dropDowntag.click();

            setTimeout(() => {
              dropDowntag.click();
              if (dateTag && timeTag) {
                dateTag.value = date;
                timeTag.value = time;
                const event = new Event("input", {
                  bubbles: true,
                  cancelable: true,
                });
                dateTag.dispatchEvent(event);
                timeTag.dispatchEvent(event);
              } else {
                console.error("no date tag");
              }
            }, 200);
          }, 400);
        } else {
          console.error("No send sendLaterBtn");
        }
      }, 400);
    } else {
      console.error("No send daylay tag");
    }
  }
  function getCurTime() {
    const now = new Date();
    const date = now.toLocaleDateString("en-US");
    const hours = now.getHours();
    const amOrPm = hours > 12 ? "PM" : "AM";
    const halfHours = hours % 12;
    let minue = now.getMinutes() + 5;
    minue = ("0" + minue).slice(-2);

    return {
      date,
      time: `${halfHours}:${minue} ${amOrPm}`,
    };
  }
  delay();
})();
