import {React, useState} from "react";
import { css, cx } from "@emotion/css";

// type Props = {
//   messages: string[];
// };

const styles = {
  floatContainer: css`
    display: flex;
    `,
  floatRight: css`
    justify-content: flex-end;
  `,
  floatLeft: css`
    justify-content: flex-start;
  `,
}
export const Messages = ({ messages }) => {
  // const [me, setMe] = useState(false)
  let me = false
  return (
    <div>
      {messages.map((message, index) => {
          // setMe(false)
          me = false
          if (index % 2 === 0) {
            // setMe(true)
            me = true
            console.log("index: ", index)
            console.log("me: ", me)
          }
          return (
            <div className={cx(styles.floatContainer, me? styles.floatRight : styles.floatLeft)} key={message}>{message}</div>
          )
      }
      )}
    </div>
  );
};