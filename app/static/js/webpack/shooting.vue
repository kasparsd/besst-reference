<template>
  <div class="error-shooting">
    <div class="header">
      <span class="title">{{ $t('errorCode') }}</span>
      <el-button @click="doCreate" v-if="per">Create</el-button>
    </div>

    <div class="content-wrap">
      <div class="left">
        <el-input class="search" placeholder="Search" v-model="search" />
        <div
          @click="changeErrorCode(item, index)"
          v-for="(item, index) in filterErrorList"
          :key="index"
          :class="['error-item', { active: index == currentIdx }]"
        >
          <p class="name">{{ item.name }}</p>
          <button class="btn-underline" @click.stop="onDelete(item)">Delete</button>
        </div>
      </div>
      <div class="content">
        <el-tabs v-model="language">
          <el-tab-pane label="English" name="en" />
          <el-tab-pane label="中文" name="zh" />
          <el-tab-pane label="Deutsch" name="de" />
          <el-tab-pane label="Dutch" name="nl" />
          <el-tab-pane label="French" name="fr" />
          <el-tab-pane label="Czech" name="cs" />
          <el-tab-pane label="Italian" name="it" />
        </el-tabs>
        <el-button @click="doInster" v-if="per && Object.keys(selectErrorCode).length == 0">Edit</el-button>
        <el-button @click="doEdit" v-if="per && Object.keys(selectErrorCode).length > 0">Edit</el-button>

        <div class="content-item">
          <label class="title">{{ $t('name') }}</label>
          <div class="desc">
            <span>{{ selectErrorCode.name }}</span>
          </div>
        </div>
        <div class="content-item">
          <label class="title">{{ $t('remark') }}</label>
          <div class="desc">
            <span>{{ selectErrorCode.remark }}</span>
          </div>
        </div>
        <div class="content-item">
          <label class="title">{{ $t('description') }}</label>
          <div class="desc">
            <span>{{ selectErrorCode.desc }}</span>
          </div>
        </div>
        <div class="content-item">
          <label class="title">{{ $t('target') }}</label>
          <div class="desc">
            <span>{{ selectErrorCode.target }}</span>
          </div>
        </div>
        <div class="content-item">
          <label class="title">{{ $t('solution') }}</label>
          <div class="desc">
            <p v-for="(item, index) in selectErrorCode.solutionList" :key="index">
              <!-- <span v-if="item">{{ index + 1 }}. {{ item }}</span> -->
              <span v-if="item">{{ item }}</span>
            </p>
          </div>
        </div>
        <!--<div class="content-item">-->
        <!--<label class="title">Video</label>-->
        <!--<div class="desc">-->
        <!--<el-button type="primary">Download</el-button>-->
        <!--</div>-->
        <!--</div>-->
        <div class="tip">
          <label class="tip-label">{{ $t('tip') }}: </label>
          <div class="tip-content">
            {{ $t('tipContent') }}
          </div>
        </div>
        <div class="help">
          <label class="help-label">{{ $t('help') }}:</label>
          <div class="help-content">
            <p>
              {{ $t('helpContent') }}
              <a class="btn-underline" @click="linkVideo">{{ $t('link') }}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 添加/修改 -->
    <edit ref="edit" @fetch-data="getData" />
  </div>
</template>

<script>
import Core from 'core/core'
import ZH from 'src/assets/lang/zh'
import EN from 'src/assets/lang/en'
import DE from 'src/assets/lang/de'
import NL from 'src/assets/lang/nl'
import FR from 'src/assets/lang/fr'
import edit from './components/edit'

import ErrorService from 'src/services/error/index.js'
export default {
  components: { edit },
  data() {
    return {
      search: '',
      currentErrorItem: {},
      errorCodeList: [],

      user: Core.Data.getUser().id,
      language: 'en',
      currentIdx: 0
    }
  },
  computed: {
    per() {
      return this.user === 24 || this.user === 627
    },
    filterErrorList() {
      if (this.search == '') {
        return this.errorCodeList
      } else {
        return this.errorCodeList.filter((item) => {
          return item.name.includes(this.search)
        })
      }
    },
    selectErrorCode() {
      if (!this.currentErrorItem.langList) return {}
      return this.currentErrorItem.langList.find((item) => item.language === this.language) || {}
    }
  },
  i18n: {
    messages: {
      fr: FR.Dealer.Error.Shooting,
      en: EN.Dealer.Error.Shooting,
      zh: ZH.Dealer.Error.Shooting,
      de: DE.Dealer.Error.Shooting,
      nl: NL.Dealer.Error.Shooting
    }
  },
  mounted() {
    this.getComponentErrorList()
  },
  methods: {
    doEdit() {
      this.$refs['edit'].showEdit(true, this.selectErrorCode)
    },
    doCreate() {
      this.$refs['edit'].showCreate()
    },
    doInster() {
      this.$refs['edit'].showEdit(false, {
        code: this.currentErrorItem._code,
        name: this.currentErrorItem.name,
        language: this.language
      })
    },
    changeErrorCode(item, idx) {
      this.currentIdx = idx
      this.language = 'en'
      this.currentErrorItem = item
    },
    getComponentErrorList() {
      ErrorService.findAllGroupByCode().then((res) => {
        this.errorCodeList = []
        for (let i in res.data) {
          const errList = res.data[i]
          this.errorCodeList.push({
            _code: i,
            name: `Error ${i}`,
            langList: errList
          })
        }
        this.currentErrorItem = this.errorCodeList[0]
      })
    },
    getData({ data, isCreate }) {
      if (isCreate) {
        this.getComponentErrorList()
      } else {
        const errItem = this.errorCodeList[this.currentIdx]
        if (errItem.langList.some((item) => item.language === data.language)) {
          errItem.langList = errItem.langList.map((item) => {
            if (item.language === data.language) {
              return data
            } else {
              return item
            }
          })
        } else {
          this.$set(this.currentErrorItem, 'langList', [...errItem.langList, data])
        }
      }
    },
    linkVideo() {
      this.$router.push({
        name: 'brandErrorShootingVideoList',
        query: { code: this.selectErrorCode.code }
      })
    },
    onDelete(item) {
      this.$confirm('Are you sure you wish to delete this?', 'Delete', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        type: 'warning'
      }).then(() => {
        const ids = item.langList.map((lang) => lang.id).join(',')
        ErrorService.deleteErrorMessage(ids).then((res) => {
          this.$message({
            type: 'success',
            message: 'Delete Successfully'
          })
          this.getComponentErrorList()
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.error-shooting {
  .content-wrap {
    display: flex;
    padding: 0;
    // 左侧列表栏
    .left {
      overflow-y: auto;
      padding: 20px;
      .search {
        margin-bottom: 10px;
      }
      .error-item {
        display: flex;
        flex-direction: row;
        padding: 10px 20px;
        cursor: pointer;
        margin-bottom: 5px;
        .name {
          margin-right: 10px;
        }
      }
      .active,
      .error-item:hover {
        background: #e26829;
        .btn-underline {
          color: #ffffff;
        }
      }
    }
    // 中间内容
    .content {
      padding: 20px;
      flex: 1;
      .content-item {
        width: 100%;
        padding: 16px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        font-size: 0;
        .title {
          display: inline-block;
          vertical-align: top;
          width: 140px;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          padding: 0 5px;
        }
        .desc {
          display: inline-block;
          vertical-align: top;
          width: calc(100% - 140px);
          span {
            font-size: 14px;
            color: #ffffff;
            &.strong {
              font-weight: bold;
            }
          }
          p {
            font-size: 14px;
            color: #ffffff;
          }
        }
      }
      .tip {
        display: flex;
        padding: 30px 5px;
        .tip-label {
          padding-right: 10px;
          color: #e26829;
        }
        .tip-content {
          flex: 1;
          color: #e26829;
        }
      }
      .help {
        display: flex;
        padding: 0 5px;
        .help-label {
          padding-right: 10px;
          color: #e26829;
        }
        .help-content {
          flex: 1;
          color: #e26829;
        }
      }
    }
  }
}
</style>



// WEBPACK FOOTER //
// shooting.vue?b55a946e