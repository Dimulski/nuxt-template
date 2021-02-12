<template>
  <div>
    <b-pagination
      first-number
      last-number
      :per-page="perPage"
      :size="size"
      :value="value"
      :align="align"
      :total-rows="total"
      @change="(val) => $emit('change', val)"
    >
      <template #prev-text>
        <a class="page-link" aria-label="Previous">
          <span aria-hidden="true"><i class="fa fa-angle-left" aria-hidden="true" /></span>
        </a>
      </template>
      <template #next-text>
        <a class="page-link" aria-label="Next">
          <span aria-hidden="true"><i class="fa fa-angle-right" aria-hidden="true" /></span>
        </a>
      </template>
    </b-pagination>
  </div>
</template>
<script>
export default {
  name: 'BasePagination',
  props: {
    pageCount: {
      type: Number,
      default: 0,
      description:
        'Pagination page count. This should be specified in combination with perPage'
    },
    perPage: {
      type: Number,
      default: 10,
      description:
        'Pagination per page. Should be specified with total or pageCount'
    },
    total: {
      type: Number,
      default: 0,
      description:
        'Can be specified instead of pageCount. The page count in this case will be total/perPage'
    },
    value: {
      type: Number,
      default: 1,
      description: 'Pagination value'
    },
    size: {
      type: String,
      default: '',
      description: 'Pagination size'
    },
    align: {
      type: String,
      default: '',
      description: 'Pagination alignment (e.g center|start|end)'
    }
  }
};
</script>
