<template>
  <div>
    <Header />
    <div class="help">
      <h3>How system works ?</h3>
      <div>
        <p class="help-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          mollitia eveniet, dolor architecto quasi cupiditate dignissimos
          voluptates natus saepe id perferendis consectetur pariatur molestiae
          doloremque eius tempore molestias nesciunt odio numquam accusantium
          maxime reprehenderit excepturi. Dolorem eveniet nostrum maiores? A
          recusandae ullam facilis quis. Deleniti in autem a veritatis. Iusto,
          sit doloribus vel, nostrum cumque tempora porro praesentium cupiditate
          eius voluptates, in eaque. Perspiciatis debitis sunt, rerum dolorum
          necessitatibus ab nostrum nemo animi quae minima corporis quisquam
          quia eveniet excepturi omnis facere labore aut eligendi? Veniam
          deleniti quia eos. Provident natus cupiditate, voluptate ratione iusto
          aut. Itaque maxime placeat odit minus quibusdam nihil quidem amet
          mollitia voluptatibus repudiandae distinctio rem, ad consequuntur cum
          quae in modi doloremque beatae dolor saepe, blanditiis a nisi sint.
          Quae, rem neque, corrupti sint possimus fugit reprehenderit voluptatem
          iste sunt delectus esse blanditiis ratione illo vitae. Quod sit libero
          maxime nisi suscipit quas ipsum dignissimos non aliquid quam? Repellat
          harum provident earum quo. Beatae itaque cumque aliquam inventore
          mollitia velit quibusdam fuga alias magni commodi doloremque dolorum
          soluta, eaque, quidem, totam architecto. Dicta, quas ipsam atque aut
          vero, asperiores tempore, est dolorem et natus excepturi. Inventore
          illum minus perferendis magnam nisi officiis ipsa adipisci assumenda?
        </p>
        <div>
          <h3>Contact</h3>
          <p><strong>E-mail: </strong> info@gmail.com</p>
          <p><strong>Phone: </strong> +383 45 989 783 345</p>
          <p>
            <strong>Address: </strong>Rr. Rexhep Mala, Aktash, Nr.34, Prishtinë
            10000, Kosovë
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "Help-Page",
  components: {
    Header,
  },
};
</script>

<style scoped>
.help {
  max-width: 800px;
  margin: 150px auto;
}

.help h3 {
  margin-bottom: 32px;
}

.help-content {
  line-height: 1.8;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}
</style>
