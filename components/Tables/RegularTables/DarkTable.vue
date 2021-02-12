<template>
  <b-card no-body class="bg-default shadow">
    <b-card-header class="bg-transparent border-0">
      <h3 class="mb-0 text-white">
        Dark table
      </h3>
    </b-card-header>

    <el-table
      class="table-responsive table table-dark"
      header-row-class-name="thead-dark"
      :data="projects"
    >
      <el-table-column
        label="Project"
        min-width="310px"
        prop="name"
      >
        <template #default="{row}">
          <b-media no-body class="align-items-center">
            <a href="#" class="mr-3">
              <b-img class="avatar" rounded="circle" alt="Image placeholder" :src="row.img" />
            </a>
            <b-media-body>
              <span class="font-weight-600 name mb-0 text-sm">{{ row.title }}</span>
            </b-media-body>
          </b-media>
        </template>
      </el-table-column>
      <el-table-column
        label="Budget"
        prop="budget"
        min-width="140px"
      />

      <el-table-column
        label="Status"
        min-width="170px"
        prop="status"
      >
        <template #default="{row}">
          <badge class="badge-dot mr-4">
            <i :class="`bg-${row.statusType}`" />
            <span class="status" :class="`text-${row.statusType}`">{{ row.status }}</span>
          </badge>
        </template>
      </el-table-column>

      <el-table-column label="Users" min-width="190px">
        <div class="avatar-group">
          <a
            href="#"
            class="avatar avatar-sm rounded-circle"
            data-toggle="tooltip"
            data-original-title="Ryan Tompson"
          >
            <img alt="Image placeholder" src="img/theme/team-1.jpg">
          </a>
          <a
            href="#"
            class="avatar avatar-sm rounded-circle"
            data-toggle="tooltip"
            data-original-title="Romina Hadid"
          >
            <img alt="Image placeholder" src="img/theme/team-2.jpg">
          </a>
          <a
            href="#"
            class="avatar avatar-sm rounded-circle"
            data-toggle="tooltip"
            data-original-title="Alexander Smith"
          >
            <img alt="Image placeholder" src="img/theme/team-3.jpg">
          </a>
          <a
            href="#"
            class="avatar avatar-sm rounded-circle"
            data-toggle="tooltip"
            data-original-title="Jessica Doe"
          >
            <img alt="Image placeholder" src="img/theme/team-4.jpg">
          </a>
        </div>
      </el-table-column>

      <el-table-column
        label="Completion"
        prop="completion"
        min-width="240px"
      >
        <template #default="{row}">
          <div class="d-flex align-items-center">
            <span class="completion mr-2">{{ row.completion }}%</span>
            <div>
              <base-progress :type="row.statusType" :value="row.completion" />
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </b-card>
</template>
<script>
import { Table, TableColumn } from 'element-ui';
import projects from './../projects';
export default {
  name: 'LightTable',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
    return {
      projects,
      currentPage: 1
    };
  }
};
</script>
