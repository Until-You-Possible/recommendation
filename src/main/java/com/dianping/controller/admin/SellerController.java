package com.dianping.controller.admin;

import com.dianping.core.BusinessException;
import com.dianping.core.EmBusinessError;
import com.dianping.core.UnifyResponseSuccess;
import com.dianping.model.SellerModel;
import com.dianping.service.SellerService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import sun.jvm.hotspot.SALauncherLoader;

import javax.validation.Valid;
import java.util.List;

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

    @GetMapping("/getAllSeller")
    public UnifyResponseSuccess getAllSeller() {
        List<SellerModel> sellerModel = sellerService.selectAll();
        return UnifyResponseSuccess.create(sellerModel);
    }

    @GetMapping("/checkCurrent")
    public UnifyResponseSuccess getCurrent(@RequestParam(name = "id") Integer id) {
        SellerModel sellerModel = sellerService.get(id);
        return UnifyResponseSuccess.create(sellerModel);
    }
    // 商户禁用
    @GetMapping("/down")
    public UnifyResponseSuccess down(@RequestParam(value = "id") Integer id) throws BusinessException {
        SellerModel sellerModel = sellerService.changeStatus(id, 1);
        return UnifyResponseSuccess.create(sellerModel);
    }

    @GetMapping("/up")
    public UnifyResponseSuccess up(@RequestParam(value = "id") Integer id) throws BusinessException {
        SellerModel sellerModel = sellerService.changeStatus(id, 0);
        return UnifyResponseSuccess.create(sellerModel);
    }

}
