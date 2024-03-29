<script setup>
const value = ref('Test')
const emptyValue = ref('')
const multilineValue = ref('Multiline test')
const emailValue = ref('foo@bar.com')
const numberValue = ref(4)
const monthValue = ref('')
</script>

<template>
  <div>

    <table>
      <tbody>

        <tr>
          <td>
            <code>Textfield</code>
          </td>
          <td colspan="2">
            <Textfield v-model="value" />
          </td>
        </tr>

        <tr>
          <td>
            With placeholder
          </td>
          <td colspan="2">
            <Textfield
              v-model="emptyValue"
              placeholder="Fill in value..."
            />
          </td>
        </tr>

        <tr>
          <td>
            Clear button
          </td>
          <td colspan="2">
            <Textfield
              v-model="value"
              :clear="true"
            />
          </td>
        </tr>

        <tr>
          <td>
            Undo button
          </td>
          <td>
            <Textfield
              v-model="value"
              :undo="true"
            />
          </td>
          <td>
            <Textfield
              v-model="value"
              undo="Foo"
            />
          </td>
        </tr>

        <tr>
          <td>
            With an icon
          </td>
          <td colspan="2">
            <Textfield
              v-model="value"
              :clear="true"
            >
              <Icon>
                <IconSearch />
              </Icon>
            </Textfield>
          </td>
        </tr>

        <tr>
          <td>
            Min and max values
          </td>
          <td>
            <Textfield
              v-model="value"
              :min="2"
              :max="6"
            />
          </td>
          <td>
            <Textfield
              v-model="numberValue"
              type="number"
              :min="2"
              :max="6"
            />
          </td>
        </tr>

        <tr>
          <td>
            Render a <code>textarea</code>
          </td>
          <td colspan="2">
            <Textfield
              v-model="multilineValue"
              :multiline="true"
            />
          </td>
        </tr>

      </tbody>
    </table>

    <h3>Extra features</h3>

    <table>
      <tbody>

        <tr>
          <td>
            <code>autocomplete</code> enables <ExternalLink
              href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#inappropriate-for-the-control"
            >browser's autocomplete</ExternalLink> feature. Always use the <code>name</code> attribute when using autocomplete.
          </td>
          <td>
            <Textfield
              v-model="value"
              :autocomplete="true"
              name="Name"
            />
          </td>
        </tr>

      </tbody>
    </table>

    <h3>Types</h3>

    <p>
      Set <code>type</code> to any <ExternalLink
        href="https://www.w3schools.com/tags/att_input_type.asp"
      >HTML input type</ExternalLink>. Default is <code>text</code>.
    </p>

    <table>
      <thead>
        <tr>
          <th>number</th>
          <th>email</th>
          <th>month</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>
            <Textfield
              v-model="numberValue"
              type="number"
            />
            {{ typeof numberValue }}
          </td>
          <td>
            <Textfield
              v-model="emailValue"
              type="email"
            />
            {{ typeof emailValue }}
          </td>
          <td>
            <Textfield
              v-model="monthValue"
              type="month"
            />
            <br>{{ monthValue }} ({{ typeof monthValue }})
          </td>
        </tr>

      </tbody>
    </table>

  </div>
</template>
