<template>
  <div>
    <ul class="uk-breadcrumb crumbs">
      <li>
        <nuxt-link to="/" class="transition">
          <span>{{$t('breadCrumb.index')}}</span>
        </nuxt-link>
      </li>
      <li class="crumb" v-for="(crumb, index) in crumbs" :key="'crmb' + index">
        <nuxt-link v-if="crumb.title.includes('breadCrumb')" :to="crumb.link + '/'" class="transition">
          <span>{{ $t(`${crumb.title}`) }}</span>
        </nuxt-link>
        <nuxt-link v-else :to="crumb.link + '/'" class="transition">
          <span>{{ crumb.title }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    linkName: String,
    lastCrumb: String,
  },
  data() {
    return {
    }
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.substring(1).split('/')
      const crumbs = []

      let path = ''

      if(params.includes('en')) {
        params.shift()
        params.forEach((param, index) => {
          path = `${path}/${param}`
          if (path.endsWith('/')) {
            path = path.slice(0, -1) // remove trailing slash
          }
          const match = this.$router.match(path)

          if (match.name !== null) {
            let formatedMatch = match.name.replace(/[_]/gi, '').slice(0, -2)
            formatedMatch.replace(/[-]/gi, '_')
            crumbs.push({
              title: formatedMatch.replace(/[-]/gi, '_'),
              link: match.path
            })
          }
        })
      } else {
        params.forEach((param, index) => {
          path = `${path}/${param}`
          const match = this.$router.match(path)
          if (path.endsWith('/')) {
            path = path.slice(0, -1) // remove trailing slash
          }
          if (match.name !== null) {
            /*let formatedMatch = match.name.replace(/[_]/gi, '').slice(0, -2)*/
            let formatedMatch = match.name.replace(/[_]/gi, '')   // for production till langs incomplete
            formatedMatch.replace(/[-]/gi, '_')
            crumbs.push({
              title: 'breadCrumb.'+ formatedMatch.replace(/[-]/gi, '_'),
              link: match.path
            })
          }
        })
      }
      if (crumbs.length > 1) {
        const lastCrumb = crumbs[crumbs.length - 1]
        const secondLastCrumb = crumbs[crumbs.length - 2]
        if (lastCrumb.link === secondLastCrumb.link + '/') {
          crumbs.pop()
        }
      }

      if (crumbs.length > 0) {
        const lastCrumb = crumbs[crumbs.length - 1]
        if (lastCrumb.link.endsWith('/')) {
          lastCrumb.link = lastCrumb.link.slice(0, -1)
        }
      }

      if (this.$route.params.lang === 'eu') {
        crumbs.pop()
      }

      if(this.lastCrumb) {
        crumbs.pop()
        crumbs.push({
          title: this.lastCrumb,
          link: ''
        })
      }

      return crumbs
    },
  },
}
</script>

<style scoped>
.crumb:last-child a{
  text-decoration: none;
  cursor: initial;
}

.testCrumbs {
  display: flex;
  list-style-type: none;
  padding-left: 0;
}

.testCrumbs li:not(:first-child){
  margin-left: 10px;
}
</style>
