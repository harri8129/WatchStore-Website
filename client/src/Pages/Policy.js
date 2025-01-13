import React from 'react'
import Layout from '../Components/Layout/Layout'
import "../Style/policy.css"

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
    <div className="row contactus ">

      <div className="col">
        <p>Welcome to Watchomatic This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services. By accessing our website, you agree to this policy.
</p>
        <p>We may collect the following types of personal information:</p>

<p>1. When you sign up for our services, make a purchase, or contact us, we may collect your name, email address, postal address, and payment information.</p>

<p>2. We collect information about how you interact with our website, such as pages visited, time spent, and other usage data.</p>

<p>3. We may collect information about the device you use to access our website, including IP address, browser type, and operating system.</p>
        <p>We use your information to:</p>
        <p>- Provide, maintain, and improve our services.
<br></br>- Communicate with you about updates, promotions, and special offers.
<br></br>- Process transactions and payments.
<br></br>- Respond to your inquiries and provide customer support.
<br></br> - Analyze usage trends and improve our website.</p>
      </div>
    </div>
  </Layout>
    )
}

export default Policy