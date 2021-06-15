<template>
  <div>
    <!-- <v-row no-gutters justify="center" align="center">
      <v-col cols="8"> -->
        <v-file-input
          :label="inputLabel"
          prepend-icon=""
          @change="upload"
          @click:clear="fileUrl = ''"
        />
      <!-- </v-col> -->

      <!-- <v-col cols="4" class="pl-2">
        <v-btn color="primary" dark small @click="upload">
          点击上传
          <v-icon right dark>mdi-cloud-upload</v-icon>
        </v-btn>
      </v-col> -->
    <!-- </v-row> -->

    <v-img
      v-if="fileUrl"
      :src="fileUrl"
      width="100"
      height="100"
    />

    <v-card v-if="fileInfos.length > 0" class="mx-auto">
      <v-list>
        <v-subheader>List of Files</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item v-for="(file, index) in fileInfos" :key="index">
            <a :href="file.url">{{ file.name }}</a>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import UploadService from "./uploadFilesService";

export default {
  name: "upload-files",
  props: [
    'inputLabel'
  ],
  data() {
    return {
      fileUrl: '',
      currentFile: undefined,
      progress: 0,
      fileInfos: []
    }
  },
  methods: {
    upload(file) {
      if (file) {
        UploadService.upload(file, (event) => {
          this.progress = Math.round((100 * event.loaded) / event.total);
        }).then((response) => {
          this.fileUrl = response.data.data.fileUrl
          this.$emit('uploadUrl', this.fileUrl)
        }).then((files) => {
          this.fileInfos = files.data;
        }).catch(() => {
          // this.$Message.error({
          //   message: error,
          //   time: 3000,
          //   light: false,
          // })
          // this.currentFile = undefined;
        })
      } else {
        this.$Message.warning({
          message: "请选择文件",
          time: 2000,
          light: false,
        })
      }
    },
  }
};
</script>