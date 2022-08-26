<script setup>
import ComponentsLibs from "../components/designer/componentsLibs.vue";
import FormContainer from "../components/designer/formContainer.vue";
import PropertyContainer from "../components/designer/propertyContainer.vue";
import LayoutContainer from "../components/designer/layoutContainer.vue";
</script>
<template>
  <LayoutContainer>
    <template #libs>
      <ComponentsLibs />
    </template>
    <template #form>
      <FormContainer />
    </template>
    <template #property>
      <PropertyContainer />
    </template>
  </LayoutContainer>
</template>
