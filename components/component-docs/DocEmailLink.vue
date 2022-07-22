<template>
  <div>

    <p>
      <EmailLink
        to="some.person@email.com"
        :external="true"
        subject="Hello, world"
        body="This is the email body that you can encode in the link"
      >
        Email link to Some Person
      </EmailLink>
    </p>

  </div>
</template>
