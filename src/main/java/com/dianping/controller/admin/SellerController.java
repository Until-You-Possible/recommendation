package com.dianping.controller.admin;

import com.dianping.core.BusinessException;
import com.dianping.core.EmBusinessError;
import com.dianping.core.UnifyResponseSuccess;
import com.dianping.model.SellerModel;
import com.dianping.service.SellerService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController("/admin/seller")
@ResponseBody
@RequestMapping("/admin/seller")
@Validated
public class SellerController {

    private final SellerService sellerService;

    public SellerController(SellerService sellerService) {
        this.sellerService = sellerService;
    }
    // 商户入住 // 商户列表 // 商户查询 // 商户禁用和开放

    @PostMapping("/create_seller")
    public UnifyResponseSuccess createSeller(@Valid @RequestBody SellerModel data) {
        SellerModel sellerModel = sellerService.create(data);
        return UnifyResponseSuccess.create(sellerModel);
    }

}
