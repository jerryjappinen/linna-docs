<script>
export default {
  data () {
    return {
      value: 'Test',
      emptyValue: '',
      multilineValue: 'Multiline test',
      emailValue: 'foo@bar.com',
      numberValue: 4,
      monthValue: ''
    }
  }
}

</script>

<template>
  <div>

    <h1>Textfield</h1>

    <table>
      <tbody>

        <tr>
          <td>
            <code>Textfield</code>
          </td>
          <td colspan="2">
            <textfield v-model="value" />
          </td>
        </tr>

        <tr>
          <td>
            With placeholder
          </td>
          <td colspan="2">
            <textfield
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
            <textfield
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
            <textfield
              v-model="value"
              :undo="true"
            />
          </td>
          <td>
            <textfield
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
            <textfield
              v-model="value"
              :clear="true"
              icon="magnifying-glass"
            />
          </td>
        </tr>

        <tr>
          <td>
            Min and max values
          </td>
          <td>
            <textfield
              v-model="value"
              :min="2"
              :max="6"
            />
          </td>
          <td>
            <textfield
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
            <textfield
              v-model="value"
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
            <code>autocomplete</code> enables <doc
              href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#inappropriate-for-the-control"
            >browser's autocomplete</doc> feature. Always use the <code>name</code> attribute with this.
          </td>
          <td>
            <textfield
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
      Set <code>type</code> to any <doc
        href="https://www.w3schools.com/tags/att_input_type.asp"
      >HTML input type</doc>. Default is <code>text</code>.
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
            <textfield
              v-model="numberValue"
              type="number"
            />
            {{ typeof numberValue }}
          </td>
          <td>
            <textfield
              v-model="emailValue"
              type="email"
            />
            {{ typeof emailValue }}
          </td>
          <td>
            <textfield
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
