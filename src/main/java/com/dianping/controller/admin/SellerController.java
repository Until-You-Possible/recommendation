package com.dianping.controller.admin;

import com.dianping.service.SellerService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController("/admin/seller")
@ResponseBody
@RequestMapping("/admin/seller")
public class SellerController {

    private final SellerService sellerService;

    public SellerController(SellerService sellerService) {
        this.sellerService = sellerService;
    }
    // 商户入住 // 商户列表 // 商户查询 // 商户禁用和开放

}
