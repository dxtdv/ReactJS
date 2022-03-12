import {ArrowDownward, ArrowUpward} from '@mui/icons-material'

import './featuredInfo.css'


export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">52.415</span>
            <span className="featuredMoneyRate">-11.4<ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">82.415</span>
            <span className="featuredMoneyRate">-5.4<ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Costs</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">23.255</span>
            <span className="featuredMoneyRate">2.4<ArrowUpward className='featuredIcon positive'/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}
