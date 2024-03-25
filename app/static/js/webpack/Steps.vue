<template>
  <div class="m-steps-area">
    <div class="m-steps">
      <div
        :class="[
          'm-steps-item',
          {
            finished: current > n,
            process: current === n && n !== totalSteps,
            'last-process': current === totalSteps && n === totalSteps,
            'middle-wait': current < n && n !== totalSteps,
            'last-wait': current < n && n === totalSteps
          }
        ]"
        v-for="n in totalSteps"
        :key="n"
      >
        <!-- @click="onChange(n)" -->
        <div class="m-steps-icon">
          <span class="u-icon" v-if="current <= n">{{ n }}</span>
          <span class="u-icon" v-else>✓</span>
        </div>
        <div class="m-steps-content">
          <div class="u-steps-title">{{ (stepsLabel[n - 1] && stepsLabel[n - 1].name) || 'S ' + n }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Steps',
  props: {
    stepsLabel: {
      // 步骤title数组
      type: Array,
      default: () => {
        return []
      }
    },
    totalSteps: {
      // 总的步骤数
      type: Number,
      default: 3
    },
    currentStep: {
      // 当前选中的步骤
      type: Number,
      default: 1
    }
  },
  watch: {
    currentStep(val) {
      this.current = val > this.totalSteps ? 1 : val
    }
  },
  data() {
    return {
      // 若当前选中步骤超过总步骤数，则默认选择步骤1
      current: this.currentStep > this.totalSteps ? 1 : this.currentStep
    }
  },
  methods: {
    onChange(index) {
      // 点击切换选择步骤
      if (this.current !== index) {
        this.current = index
        this.$emit('change', index)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.m-steps-area {
  margin: 0px auto;
  .m-steps {
    padding: 13px 0;
    display: flex;
    .m-steps-item {
      display: flex;
      align-items: center;
      flex: 1; // 弹性盒模型对象的子元素都有相同的长度，且忽略它们内部的内容
      overflow: hidden;
      font-size: 16px;
      line-height: 32px;
      .m-steps-icon {
        display: flex;
        align-items: center;
        margin-right: 8px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        text-align: center;
        span {
          width: 100%;
        }
      }
      .m-steps-content {
        display: inline-block;
        vertical-align: top;
        padding-right: 16px;
        .u-steps-title {
          position: relative;
          display: inline-block;
          padding-right: 16px;
        }
      }
    }
    .finished {
      margin-right: 16px;
      // cursor: pointer;
      &:hover {
        .m-steps-content {
          .u-steps-title {
            color: #e26829;
          }
        }
      }
      .m-steps-icon {
        background: #fff;
        border: 1px solid #a1a5b1;
        border-color: #e26829;
        .u-icon {
          color: #e26829;
        }
      }
      .m-steps-content {
        color: rgba(0, 0, 0, 0.65);
        .u-steps-title {
          color: rgba(0, 0, 0, 0.65);
          &:after {
            background: #e26829;
            position: absolute;
            top: 16px;
            left: 100%;
            display: block;
            width: 9999px;
            height: 1px;
            content: '';
          }
        }
      }
    }
    .process {
      margin-right: 16px;
      .m-steps-icon {
        background: #e26829;
        border: 1px solid #a1a5b1;
        border-color: #e26829;
        .u-icon {
          color: #fff;
        }
      }
      .m-steps-content {
        color: #fff;
        .u-steps-title {
          font-weight: 600;
          color: #fff;
          &:after {
            background: #e8e8e8;
            position: absolute;
            top: 16px;
            left: 100%;
            display: block;
            width: 9999px;
            height: 1px;
            content: '';
          }
        }
      }
    }
    .last-process {
      margin-right: 0;
      flex: 0 0 auto;
      .m-steps-icon {
        background: #e26829;
        border: 1px solid #a1a5b1;
        border-color: #e26829;
        .u-icon {
          color: #fff;
        }
      }
      .m-steps-content {
        color: #a1a5b1;
        .u-steps-title {
          font-weight: 600;
          color: #a1a5b1;
        }
      }
    }
    .middle-wait {
      margin-right: 16px;
      // cursor: pointer;
      &:hover {
        .m-steps-icon {
          border: 1px solid #e26829;
          .u-icon {
            color: #e26829;
          }
        }
        .m-steps-content {
          .u-steps-title {
            color: #e26829;
          }
        }
      }
      .m-steps-icon {
        background: transparent;
        border: 1px solid #a1a5b1;
        .u-icon {
          color: #a1a5b1;
        }
      }
      .m-steps-content {
        color: #a1a5b1;
        .u-steps-title {
          color: #a1a5b1;
          &:after {
            background: #a1a5b1;
            position: absolute;
            top: 16px;
            left: 100%;
            display: block;
            width: 9999px;
            height: 1px;
            content: '';
          }
        }
      }
    }
    .last-wait {
      margin-right: 0;
      // cursor: pointer;
      flex: 0 0 auto;
      &:hover {
        .m-steps-icon {
          border: 1px solid #e26829;
          .u-icon {
            color: #e26829;
          }
        }
        .m-steps-content {
          .u-steps-title {
            color: #e26829;
          }
        }
      }
      .m-steps-icon {
        background: transparent;
        border: 1px solid #a1a5b1;
        .u-icon {
          color: #a1a5b1;
        }
      }
      .m-steps-content {
        color: #a1a5b1;
        .u-steps-title {
          color: #a1a5b1;
        }
      }
    }
  }
}
</style>



// WEBPACK FOOTER //
// Steps.vue?84b65f76