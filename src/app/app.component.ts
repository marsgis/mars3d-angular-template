import { AfterViewInit, Component } from '@angular/core';
import * as Cesium from 'cesium/Source/Cesium';
import '../map/mars3d/mars3d.css';
import mars3d from '../map/mars3d/mars3d';

import { getMapConfig, getPoint } from '../map/api';
import { createMap } from '../map/main';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {
  title = 'marsgis-cesium-ng';


  // 添加点数据  示例
  addPointToMap(viewer) {
    getPoint().then(data => {
      // tslint:disable-next-line:prefer-const
      let dataSource = new Cesium.CustomDataSource();
      viewer.dataSources.add(dataSource);

      // tslint:disable-next-line:prefer-const
      for (let item of data.Data) {
        // tslint:disable-next-line:prefer-const
        let position = Cesium.Cartesian3.fromDegrees(item.JD, item.WD, 2);

        // 添加实体
        // tslint:disable-next-line:prefer-const
        dataSource.entities.add({
          name: item.JC,
          position,
          point: {
            // 像素点
            color: new Cesium.Color.fromCssColorString('#3388ff'),
            pixelSize: 10,
            outlineColor: new Cesium.Color.fromCssColorString('#ffffff'),
            outlineWidth: 2,
            scaleByDistance: new Cesium.NearFarScalar(1000, 1, 1000000, 0.1)
          },
          label: {
            text: item.JC,
            font: '16px 楷体',
            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            fillColor: Cesium.Color.AZURE,
            outlineColor: Cesium.Color.BLACK,
            outlineWidth: 2,
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            pixelOffset: new Cesium.Cartesian2(0, -10), // 偏移量
            distanceDisplayCondition: new Cesium.DistanceDisplayCondition(
              0.0,
              200000
            )
          },
          data: item,
          // tslint:disable-next-line:no-shadowed-variable
          click(entity) {
            // 单击回调
            alert('您单击了：' + entity.data.JC);
          }
        });
      }
    });
  }

  ngAfterViewInit(): void {
    getMapConfig().then(data => {
      // tslint:disable-next-line:prefer-const
      let viewer = createMap('cesiumContainer', data);
      this.addPointToMap(viewer);
    });
  }


}
