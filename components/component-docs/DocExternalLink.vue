<script setup>
const url = 'https://jerryjappinen.com'
</script>

<template>
  <div>

    <table>
      <tr>
        <th><code>here</code></th>
        <th><code>refer</code></th>
        <th>Output</th>
      </tr>

      <tr>
        <td><code>false</code></td>
        <td><code>false</code></td>
        <td>
          <ExternalLink :refer="true" :href="url">
            {{ url }}
          </ExternalLink>
        </td>
      </tr>

      <tr>
        <td><code>true</code></td>
        <td><code>false</code></td>
        <td>
          <ExternalLink :here="true" :href="url">
            {{ url }}
          </ExternalLink>
        </td>
      </tr>

      <tr>
        <td><code>false</code></td>
        <td><code>true</code></td>
        <td>
          <ExternalLink :refer="true" :href="url">
            {{ url }}
          </ExternalLink>
        </td>
      </tr>
    </table>

  </div>
</template>
