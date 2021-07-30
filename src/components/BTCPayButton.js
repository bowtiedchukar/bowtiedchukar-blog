/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import * as containerStyles from "./BTCPayButton.module.css"

const BTCPayButton = ({ pageUrl }) => {
  return (
    <div className={containerStyles}>
      <form
        method="POST"
        action="https://btcpay329620.lndyn.com/api/v1/invoices"
        className="btcpay-form btcpay-form--block"
      >
        <input
          type="hidden"
          name="storeId"
          defaultValue="GitAbTwHtWVQodyJS11jLfoNAzfeaNsP1DJ4WF7xunLC"
        />
        <input type="hidden" name="price" defaultValue={10} />
        <input type="hidden" name="currency" defaultValue="USD" />
        <input type="hidden" name="browserRedirect" value={pageUrl} />
        <button
          type="submit"
          className="submit"
          name="submit"
          style={{
            minWidth: "146px",
            minHeight: "40px",
            borderRadius: "4px",
            borderStyle: "none",
            backgroundColor: "#0f3b21",
            cursor: "pointer",
          }}
          alt="Pay with BtcPay, Self-Hosted Bitcoin Payment Processor"
        >
          <span style={{ color: "#fff" }}>Tip $10 with</span>
          <img
            src="https://btcpay329620.lndyn.com/img/logo.svg"
            alt="BtcPay Button"
            style={{
              height: "40px",
              display: "inline-block",
              padding: "5% 0 5% 5px",
              verticalAlign: "middle",
            }}
          />
        </button>
      </form>
    </div>
  )
}

export default BTCPayButton
