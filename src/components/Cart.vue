<template>
    <div>
    <div class="itemProduct">
      
      <CartItem
      />
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem";

export default{
    components: {
        CartItem
    },
}
</script>


<style scoped>
.itemProduct {
    display: flex;
    justify-content: space-evenly;
  }

  
</style>