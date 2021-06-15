<template>
  <div>
    <v-container fluid>
      <v-card elevation="5">
        <v-img src="@/assets/h5-partner-banner.png">
          <v-card-subtitle class="d-flex justify-center grey--text text--lighten-2 text-subtitle-1 mt-10">
            合伙人招募
          </v-card-subtitle>
          <v-card-title class="d-flex justify-center white--text pt-0">
            携手共进 合作共赢
          </v-card-title>
        </v-img>

        <v-card-title>联系信息：</v-card-title>

        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          class="mx-4 pb-4"
        >
          <v-text-field
            v-model="companyName"
            :rules="[v => !!v || '请填写公司全称']"
            label="公司全称："
            clearable
            required
          />
          <v-text-field
            v-model="companyAddress"
            :rules="[v => !!v || '请填写公司地址']"
            label="公司地址："
            clearable
            required
          />
          <v-text-field
            v-model="name"
            :rules="[v => !!v || '请填写您的姓名']"
            label="联系人："
            clearable
            required
          />
          <v-text-field
            v-model="mobile"
            :rules="mobileRules"
            :counter="11"
            label="手机号："
            clearable
            required
          />
          <v-row>
            <v-col cols="7">
              <v-text-field
                v-model="mobileCode"
                :rules="[v => !!v || '请填写验证码']"
                label="验证码："
                clearable
                required
              />
            </v-col>
            <v-col
              cols="5"
              class="d-flex align-center"
            >
              <v-btn
                :disabled="smsDisabled"
                color="success"
                elevation="2"
                small
                width="120"
                @click="sms"
              >
                {{ smsBtn }}
              </v-btn>
            </v-col>
          </v-row>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="邮箱："
            clearable
            required
          />
          <v-select
            v-model="industry"
            :items="industrys"
            :menu-props="{ top: true, offsetY: true }"
            :rules="[v => !!v || '请选择经营范围']"
            label="经营范围"
            required
          />
          <v-text-field
            v-model="sales_num"
            :rules="[v => !!v || '请填写销售人员数量']"
            label="销售人员数量："
            clearable
            required
          />
          <v-text-field
            v-model="product"
            :rules="[v => !!v || '请填写公司过往代理产品']"
            label="公司过往代理产品："
            clearable
            required
          />

          <v-card-subtitle
            class="pl-0 pb-0 text-subtitle-1"
          >
            意向城市：
          </v-card-subtitle>
          <v-row class="pt-0">
            <v-col cols="4">
              <v-select
                v-model="province"
                :items="provinces"
                item-text="name"
                item-value="id"
                :menu-props="{ top: true, offsetY: true }"
                :rules="[v => !!v || '请选择省级地区']"
                label="省级地区"
                required
                @change="getCitys"
              />
            </v-col>
            <v-col cols="4">
              <v-select
                v-model="city"
                :items="citys"
                item-text="name"
                item-value="id"
                :menu-props="{ top: true, offsetY: true }"
                :rules="[v => !!v || '请选择市级地区']"
                label="市级地区"
                required
                @change="getDistricts"
              />
            </v-col>
            <v-col cols="4">
              <v-select
                v-model="district"
                :items="districts"
                item-text="name"
                item-value="id"
                :menu-props="{ top: true, offsetY: true }"
                :rules="[v => !!v || '请选择区级地区']"
                label="区级地区"
                required
              />
            </v-col>
          </v-row>
          
          <div class="d-flex justify-space-around">
            <v-btn
              :disabled="!valid"
              color="primary"
              elevation="2"
              @click="submit"
            >
              提交申请
            </v-btn>
          </div>
        </v-form>
      </v-card>

      <v-card elevation="5" class="mt-4">
        <v-card-title
          class="d-flex justify-space-around"
        >
          VIP热线: 15257569960
        </v-card-title>
        <v-img src="@/assets/h5-partner-bottom.png" />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import {
  getArea,
  sendSms,
  applyAgent
} from '@/utils/api'

export default {
  data: () => ({
    valid: true,
    companyName: '',
    companyAddress: '',
    name: '',
    mobile: '',
    mobileRules: [
      v => !!v || '请填写您的手机号',
      v => /^1[3|4|5|7|8][0-9]\d{8}$/.test(v) || '请正确填写您的手机号'
    ],
    mobileCode: '',
    smsBtn: '获取验证码',
    smsDisabled: false,
    email: '',
    emailRules: [
      v => !!v || '请填写您的邮箱地址',
      v => /.+@.+\..+/.test(v) || '请正确填写您的邮箱地址'
    ],
    industry: '',
    industrys: [
      '互联网科技',
      '咨询服务',
      'k12教育',
      '艺术教育',
      '高等教育',
      '读书文化',
      '出版传媒',
      '管理营销',
      '财经楼市',
      '早教幼教',
      '法律行业',
      '职场技能',
      '情感心理',
      '医疗行业',
      '语言培训',
      '学历提升',
      '快消零售',
      '其他行业',
    ],
    sales_num: '',
    product: '',
    province: null,
    provinceName: '',
    provinces: [],
    city: null,
    cityName: '',
    citys: [],
    district: null,
    districtName: '',
    districts: []
  }),

  watch: {
    province(selected, current) {
      this.provinces.map(val => {
        if (val.id === selected) {
          this.provinceName = val.name
        }
      })
      if (selected !== current) {
        this.city = ''
        this.district = ''
      }
    },
    city(selected, current) {
      this.citys.map(val => {
        if (val.id === selected) {
          this.cityName = val.name
        }
      })
      if (selected !== current) {
        this.district = ''
      }
    },
    district(selected) {
      this.districts.map(val => {
        if (val.id === selected) {
          this.districtName = val.name
        }
      })
    }
  },

  mounted() {
    this.getProvinces()
  },

  methods: {
    submit () {
      return new Promise(() => {
        applyAgent({
          company_name: this.companyName,
          company_address: this.companyAddress,
          name: this.name,
          mobile: this.mobile,
          mobile_code: this.mobileCode,
          email: this.email,
          industry: this.industry,
          sales_num: this.salesNum,
          product: this.product,
          province_name: this.provinceName,
          city_name: this.cityName,
          district_name: this.districtName
        }).then(res => {
          if (res.code === 0) {
            this.$Message.success({
              message: "信息已收到!我们会尽快联系您",
              time: 3000, // 提示框显示的时间
              light: false, // 设置为true则提示框背景为透明
            })
            this.$refs.form.reset() // 重置表单
          }
        })
      })
      // this.$refs.form.validate() // 验证表单
      // this.$refs.form.reset() // 重置表单
      // this.$refs.form.resetValidation() // 重置验证
      // console.log(this.provinceName, this.cityName, this.districtName)
    },
    countingDown() {
      let count = 60
      let codeTimeObj = null
      codeTimeObj = setInterval(() => {
        this.smsDisabled = true
        this.smsBtn = count + '秒后再次获取'
        count--
        if (count < 1) {
          clearInterval(codeTimeObj)
          this.smsDisabled = false
          this.smsBtn = '获取验证码'
        }
      }, 1000)
    },
    sms() {
      if (this.mobile) {
        return new Promise(() => {
          sendSms({
            mobile: this.mobile
          }).then(res => {
            if (res.code === 0) {
              this.countingDown()
              this.$Message.success({
                message: "验证码已发送至您手机",
                time: 3000,
                light: false,
              })
            }
          })
        })
      } else {
        this.$Message.warning({
          message: "请填写您的手机号,再获取验证码",
          time: 3000,
          light: false,
        })
      }
    },
    getProvinces() {
      return new Promise(() => {
        getArea({
          pid: 0
        }).then(res => {
          if (res.code === 0) {
            this.provinces = res.data
          }
        })
      })
    },
    getCitys(id) {
      return new Promise(() => {
        getArea({
          pid: id
        }).then(res => {
          if (res.code === 0) {
            this.citys = res.data
            this.searchExactDetialShow = false
          }
        })
      })
    },
    getDistricts(id) {
      return new Promise(() => {
        getArea({
          pid: id
        }).then(res => {
          if (res.code === 0) {
            this.districts = res.data
          }
        })
      })
    },
  },
}
</script>
