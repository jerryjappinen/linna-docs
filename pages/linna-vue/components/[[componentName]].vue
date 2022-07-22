<script setup>
const route = useRoute()
const componentName = route.params.componentName
const importString = componentName
  ? `import ${componentName} from 'linna-vue/components/${componentName}'`
  : undefined

// FIXME: this is ridiculous, but required by resolveComponent to work as expected with dynamic imports
let is
switch (componentName) {
  case 'AppStoreBadge': is = resolveComponent('DocAppStoreBadge'); break;
  case 'Buttons': is = resolveComponent('DocButtons'); break;
  case 'ClickButton': is = resolveComponent('DocClickButton'); break;
  case 'DateInterval': is = resolveComponent('DocDateInterval'); break;
  case 'Dropdown': is = resolveComponent('DocDropdown'); break;
  case 'Dump': is = resolveComponent('DocDump'); break;
  case 'Ellipsis': is = resolveComponent('DocEllipsis'); break;
  case 'EmailLink': is = resolveComponent('DocEmailLink'); break;
  case 'Expand': is = resolveComponent('DocExpand'); break;
  case 'ExternalLink': is = resolveComponent('DocExternalLink'); break;
  case 'GooglePlayBadge': is = resolveComponent('DocGooglePlayBadge'); break;
  case 'LiveDuration': is = resolveComponent('DocLiveDuration'); break;
  case 'MobileWebAppBadge': is = resolveComponent('DocMobileWebAppBadge'); break;
  case 'Slider': is = resolveComponent('DocSlider'); break;
  case 'Spinner': is = resolveComponent('DocSpinner'); break;
  case 'Switch': is = resolveComponent('DocSwitch'); break;
  case 'Textfield': is = resolveComponent('DocTextfield'); break;
  case 'Tweet': is = resolveComponent('DocTweet'); break;
  case 'WebAppBadge': is = resolveComponent('DocWebAppBadge'); break;
  default: navigateTo('./'); break;
}

definePageMeta({
  middleware: [
    'fallbackToFirstComponentPage'
  ]
})

useHead({
  title: componentName,
  meta: {
    description: importString
  }
})
</script>

<template>
  <div>

    <h2><code>{{ componentName }}</code></h2>

    <pre><code>{{ importString }}</code></pre>

    <h3>Example</h3>

    <!-- <NuxtPage /> -->
    <component :is="is" />

  </div>
</template>
