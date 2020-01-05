<template>
  <RoutePage class="home">
    <button class="btn btn-primary" @click="increment()">Increment Count</button>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid exercitationem minus voluptas obcaecati voluptatum mollitia corporis fugiat, architecto cupiditate totam nesciunt, dolor consectetur, officia eum voluptatibus cum id. Quae, modi.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid exercitationem minus voluptas obcaecati voluptatum mollitia corporis fugiat, architecto cupiditate totam nesciunt, dolor consectetur, officia eum voluptatibus cum id. Quae, modi.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid exercitationem minus voluptas obcaecati voluptatum mollitia corporis fugiat, architecto cupiditate totam nesciunt, dolor consectetur, officia eum voluptatibus cum id. Quae, modi.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid exercitationem minus voluptas obcaecati voluptatum mollitia corporis fugiat, architecto cupiditate totam nesciunt, dolor consectetur, officia eum voluptatibus cum id. Quae, modi.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid exercitationem minus voluptas obcaecati voluptatum mollitia corporis fugiat, architecto cupiditate totam nesciunt, dolor consectetur, officia eum voluptatibus cum id. Quae, modi.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid exercitationem minus voluptas obcaecati voluptatum mollitia corporis fugiat, architecto cupiditate totam nesciunt, dolor consectetur, officia eum voluptatibus cum id. Quae, modi.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid exercitationem minus voluptas obcaecati voluptatum mollitia corporis fugiat, architecto cupiditate totam nesciunt, dolor consectetur, officia eum voluptatibus cum id. Quae, modi.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid exercitationem minus voluptas obcaecati voluptatum mollitia corporis fugiat, architecto cupiditate totam nesciunt, dolor consectetur, officia eum voluptatibus cum id. Quae, modi.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid exercitationem minus voluptas obcaecati voluptatum mollitia corporis fugiat, architecto cupiditate totam nesciunt, dolor consectetur, officia eum voluptatibus cum id. Quae, modi.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid exercitationem minus voluptas obcaecati voluptatum mollitia corporis fugiat, architecto cupiditate totam nesciunt, dolor consectetur, officia eum voluptatibus cum id. Quae, modi.
    </p>
  </RoutePage>
</template>

<script>
import { mapMutations } from 'vuex'
import RoutePage from '../components/RoutePage'

export default {
  components: {
    RoutePage,
  },

  methods: {
    ...mapMutations('counter', [
      'increment'
    ])
  }
}
</script>