<script setup>
const route = useRoute()
const componentName = route.params.componentName
const importString = componentName
  ? `import ${componentName} from 'linna-vue/components/${componentName}'`
  : undefined

// FIXME: this is ridiculous, but required by resolveComponent to work as expected with dynamic imports
let is
switch (componentName) {
  case 'AppStoreBadge': is = resolveComponent('ComponentDocAppStoreBadge'); break;
  case 'Buttons': is = resolveComponent('ComponentDocButtons'); break;
  case 'ClickButton': is = resolveComponent('ComponentDocClickButton'); break;
  case 'DateInterval': is = resolveComponent('ComponentDocDateInterval'); break;
  case 'Dropdown': is = resolveComponent('ComponentDocDropdown'); break;
  case 'Dump': is = resolveComponent('ComponentDocDump'); break;
  case 'Ellipsis': is = resolveComponent('ComponentDocEllipsis'); break;
  case 'EmailLink': is = resolveComponent('ComponentDocEmailLink'); break;
  case 'Expand': is = resolveComponent('ComponentDocExpand'); break;
  case 'ExternalLink': is = resolveComponent('ComponentDocExternalLink'); break;
  case 'GooglePlayBadge': is = resolveComponent('ComponentDocGooglePlayBadge'); break;
  case 'LiveDuration': is = resolveComponent('ComponentDocLiveDuration'); break;
  case 'MobileWebAppBadge': is = resolveComponent('ComponentDocMobileWebAppBadge'); break;
  case 'Slider': is = resolveComponent('ComponentDocSlider'); break;
  case 'Spinner': is = resolveComponent('ComponentDocSpinner'); break;
  case 'Switch': is = resolveComponent('ComponentDocSwitch'); break;
  case 'Textfield': is = resolveComponent('ComponentDocTextfield'); break;
  case 'Tweet': is = resolveComponent('ComponentDocTweet'); break;
  case 'WebAppBadge': is = resolveComponent('ComponentDocWebAppBadge'); break;
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
