<!--
 * @Author: Bai YanShuo
 * @Date: 2022-10-20 16:18:35
 * @LastEditors: Bai YanShuo
 * @LastEditTime: 2022-11-09 14:01:15
 * @FilePath: /BESST/besst-client/src/components/error/components/edit.vue
 * @Description: 
-->
<template>
  <el-dialog :show-close="true" :close-on-click-modal="false" :visible.sync="visible" width="50%" @close="close" class="edit-error-dialog">
    <p class="dialog-title">{{ title }}</p>
    <el-form :model="form" :rules="rules" ref="form" label-width="100px">
      <el-form-item label="Language" prop="language">
        <el-select :disabled="!isCreate" v-model="form.language" class="select">
          <el-option v-for="item in languages" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Code" prop="code">
        <el-input v-model="form.code"></el-input>
        <!-- <el-input :disabled="!isCreate" v-model="form.code"></el-input> -->
      </el-form-item>
      <el-form-item label="Name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="Remark">
        <el-input v-model="form.remark"></el-input>
      </el-form-item>
      <el-form-item label="Description">
        <el-input v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="Target">
        <el-input v-model="form.target"></el-input>
      </el-form-item>
      <el-form-item label="Solution">
        <el-input v-model="form.solution" type="textarea" :autosize="{ minRows: 3 }"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="close">cancel</el-button>
      <el-button type="success" @click="save">confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>
import ErrorService from 'src/services/error/index.js'
export default {
  name: 'ShootingEdit',
  props: {},
  data() {
    return {
      title: '',
      visible: false,
      form: {
        code: '',
        name: '',
        remark: '',
        desc: '',
        target: '',
        solution: '',
        id: '',
        language: 'en'
      },
      rules: {
        // code: [{ required: true, message: 'Please input Code', trigger: ['blur', 'change'] }]
      },
      uploadLoading: false,
      languages: [
        {
          value: 'zh',
          label: '中文'
        },
        {
          value: 'de',
          label: 'Deutsch'
        },
        {
          value: 'en',
          label: 'English'
        },
        {
          value: 'nl',
          label: 'Nederlands'
        },
        {
          value: 'fr',
          label: 'French'
        },
        {
          value: 'cs',
          label: 'Czech'
        },
        {
          value: 'it',
          label: 'Italian'
        }
      ],
      isCreate: true
    }
  },
  methods: {
    close() {
      this.visible = false
      this.$refs['form'].resetFields()
      this.form = this.$options.data().form
    },
    save() {
      this.$refs['form'].validate(async (valid) => {
        if (valid) {
          let errSolution = Array.isArray(this.form.solution) ? JSON.stringify(this.form.solution) : JSON.stringify(this.form.solution.split('-'))
          const res = await ErrorService.saveErrorMessage({
            code: Number(this.form.code),
            desc: this.form.desc,
            id: this.form.id ? this.form.id : 0,
            name: this.form.name,
            remark: this.form.remark,
            solution: errSolution,
            target: this.form.target,
            language: this.form.language
          })
          if (res.status === 200 && res.data.code != -2) {
            this.$emit('fetch-data', {
              data: res.data,
              isCreate: this.isCreate
            })
            this.$message({
              type: 'success',
              message: 'Save Successfully!'
            })
            this.close()
          } else {
            this.$message({
              type: 'error',
              message: 'Save Failed! Please check whether the Code exists'
            })
          }
        } else {
          this.$message({ type: 'error', message: '验证失败' })
          return false
        }
      })
    },
    showCreate() {
      this.isCreate = true
      this.title = 'Create Error Message'
      this.visible = true
    },
    showEdit(bool, data) {
      this.isCreate = false
      if (!bool) {
        this.title = 'Create Error Message'
        this.form.name = data.name
        this.form.code = data.code
        this.form.language = data.language
      } else {
        this.title = 'Edit Error Message'
        this.form = Object.assign(this.form, data)

        let errSolution = ''
        if (Array.isArray(data.solutionList)) {
          data.solutionList.forEach((item) => {
            errSolution += item + '-'
          })
          errSolution = errSolution.substr(0, errSolution.length - 1)
        } else {
          errSolution = data.solutionList
        }
        this.form.solution = errSolution
      }
      this.visible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-error-dialog {
  .dialog-title {
    padding: 20px 0;
    text-align: center;
  }
  .el-form {
    .select {
      width: 320px;
    }
    .el-form-item {
      .el-form-item__label {
        width: 120px;
        text-align: left !important;
      }
      .el-form-item__content {
        .el-input {
          width: 320px;
        }
        .el-textarea {
          width: 320px;
        }
      }
    }
  }
}
</style>



// WEBPACK FOOTER //
// edit.vue?397eca8e