<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <div class="grid-content">名称：</div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content">
        <el-input v-model="input" placeholder="请输入名称"></el-input>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content">有效开始时间：</div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content">
        <el-date-picker v-model="demoTime" type="datetime" placeholder="选择日期时间">
        </el-date-picker>
      </div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content"><el-button type="primary" round @click="test()">提交</el-button></div>
    </el-col>
  </el-row>
</template>

<script>
import Demo1 from '@/api/demo1'

export default {
  data() {
    return {
      pickerOptions1: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      demoTime: '',
      input: ''
    }
  },
  methods: {
    test() {
      alert(this.formatDate(this.demoTime, 'yyyy-MM-dd HH:mm'))
      const props = {
        params: {
          name: this.input,
          demoTime: this.formatDate(this.demoTime, 'yyyy-MM-dd HH:mm')
        }
      }
      Demo1.query(props, data => {
        if (data.stateCode === 1) {
          alert('请求成功')
        } else {
          // eslint-disable-next-line
          console.log(data);
        }
      })
    },
    // 日期格式化时间字符串
    formatDate(date, fmt) {
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      const o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'H+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      }
      for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          const str = o[k] + ''
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length))
        }
      }
      return fmt
    }
  }
}
</script>
<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
