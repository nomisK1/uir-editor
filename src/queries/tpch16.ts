export const tpch16 = `const %0[128] ="\\000\\000\\000\\000\`\\000\\000\\000\\000\\000\\000\\000@\\000\\000\\000x\\000\\000\\000p\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000h\\000\\000\\000\\000\\000\\000\\000\\003\\000\\000\\000\\000\\000\\000\\000\\011\\000\\000\\000\\000\\000\\000\\000\\016\\000\\000\\000P\\000\\000\\000\\023\\000\\000\\000X\\000\\000\\000\\027\\000\\000\\000H\\000\\000\\000$\\000\\000\\000\\000\\000\\000\\000-\\000\\000\\000\\000\\000\\000\\0001\\000\\000\\000"

const %2752[29] ="\\001\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %3108[0] =""

const %3146[8] ="\\000\\000\\000\\000\\006\\000\\000\\000"

const %5591[21] ="%Customer%Complaints%"

const %5645[58] ="\\002\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\010\\000\\000\\000\\012\\000\\000\\000\\022\\000\\000\\000\\000\\000\\000\\000\\020\\000\\000\\000\\007\\000\\000\\000\\022\\000\\000\\000CustomerComplaints"

const %7287[72] ="\\003\\000\\000\\000\\003\\000\\000\\000\\000\\000\\000\\012\\000\\000\\000\\012\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\//*U\\000\\000\\010\\000\\000\\000Brand#45\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %7398[16] ="\\000\\000\\000\\000\\003\\000\\000\\000\\004\\000\\000\\000\\005\\000\\000\\000"

const %11442[16] ="MEDIUM POLISHED%"

const %11491[31] ="\\000\\000\\000\\000\\017\\000\\000\\000\\000\\000\\000\\000\\017\\000\\000\\000MEDIUM POLISHED"

const %13150[8] ="\\000\\000\\000\\000\\001\\000\\000\\000"

const %35547[8] =" \\000\\000\\000\\000\\000\\000\\000"

const %37809[1] =" "

define int32 @_9_init(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 320
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_1)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 416
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_2, i32 0)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_3, i32 0)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 512
  call void _ZN5umbra17AggregationTarget4initEPS0_m (%CompilationContext_cpp_214_4, i64 45)
  %CompilationContext_cpp_214_5 = getelementptr int8 %state, i64 25104
  call void _ZN5umbra17AggregationTarget4initEPS0_m (%CompilationContext_cpp_214_5, i64 40)
  %CompilationContext_cpp_214_7 = getelementptr int8 %state, i64 49696
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%CompilationContext_cpp_214_7, %state, global %2752)
  return 1
}

define int32 @_9_compare(int8* %trampoline, int8* %left, int8* %right) [
] {
body:
  %MaterializationHelper_cpp_230_ = load data128 %left
  %MaterializationHelper_cpp_229_ = getelementptr int8 %left, i64 16
  %MaterializationHelper_cpp_230_0 = load data128 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_229_1 = getelementptr int8 %left, i64 32
  %MaterializationHelper_cpp_230_2 = load int64 %MaterializationHelper_cpp_229_1
  %MaterializationHelper_cpp_229_3 = getelementptr int8 %left, i64 40
  %MaterializationHelper_cpp_230_4 = load int32 %MaterializationHelper_cpp_229_3
  %MaterializationHelper_cpp_230_5 = load data128 %right
  %MaterializationHelper_cpp_229_6 = getelementptr int8 %right, i64 16
  %MaterializationHelper_cpp_230_7 = load data128 %MaterializationHelper_cpp_229_6
  %MaterializationHelper_cpp_229_8 = getelementptr int8 %right, i64 32
  %MaterializationHelper_cpp_230_9 = load int64 %MaterializationHelper_cpp_229_8
  %MaterializationHelper_cpp_229_10 = getelementptr int8 %right, i64 40
  %MaterializationHelper_cpp_230_11 = load int32 %MaterializationHelper_cpp_229_10
  %BigInt_cpp_106_ = cmpslt i64 %MaterializationHelper_cpp_230_9, %MaterializationHelper_cpp_230_2
  %BigInt_cpp_106_13 = zext i32 %BigInt_cpp_106_
  %BigInt_cpp_106_14 = cmpslt i64 %MaterializationHelper_cpp_230_2, %MaterializationHelper_cpp_230_9
  %BigInt_cpp_106_15 = zext i32 %BigInt_cpp_106_14
  %BigInt_cpp_106_16 = sub i32 %BigInt_cpp_106_15, %BigInt_cpp_106_13
  %SortTranslator_cpp_72_ = cmpne i32 %BigInt_cpp_106_16, 0
  condbr %SortTranslator_cpp_72_ %then %cont

then:
  return %BigInt_cpp_106_16

cont:
  %Char_cpp_136_ = call i32 _ZN5umbra11CharRuntime7compareENS_9data128_tES1_ (%MaterializationHelper_cpp_230_, %MaterializationHelper_cpp_230_5)
  %SortTranslator_cpp_72_17 = cmpne i32 %Char_cpp_136_, 0
  condbr %SortTranslator_cpp_72_17 %then18 %cont19

then18:
  return %Char_cpp_136_

cont19:
  %Text_cpp_109_ = call i32 _ZN5umbra11TextRuntime7compareENS_9data128_tES1_ (%MaterializationHelper_cpp_230_0, %MaterializationHelper_cpp_230_7)
  %Integer_cpp_93_ = cmpslt i32 %MaterializationHelper_cpp_230_4, %MaterializationHelper_cpp_230_11
  %Integer_cpp_93_20 = zext i32 %Integer_cpp_93_
  %Integer_cpp_93_21 = cmpslt i32 %MaterializationHelper_cpp_230_11, %MaterializationHelper_cpp_230_4
  %Integer_cpp_93_22 = zext i32 %Integer_cpp_93_21
  %Integer_cpp_93_23 = sub i32 %Integer_cpp_93_22, %Integer_cpp_93_20
  %SortTranslator_cpp_103_ = cmpeq i32 %Text_cpp_109_, 0
  %SortTranslator_cpp_103_24 = SExt i32 %SortTranslator_cpp_103_
  %SortTranslator_cpp_103_25 = and i32 %Integer_cpp_93_23, %SortTranslator_cpp_103_24
  %SortTranslator_cpp_103_26 = or i32 %Text_cpp_109_, %SortTranslator_cpp_103_25
  return %SortTranslator_cpp_103_26
}

declare int32 @_ZN5umbra11CharRuntime7compareENS_9data128_tES1_(data128 %1442, data128 %1456)

declare int32 @_ZN5umbra11TextRuntime7compareENS_9data128_tES1_(data128 %1573, data128 %1587)

declare void @_ZN5umbra14RelationMapped6Reader4initEPv(int8* %2025)

declare void @_ZN5umbra17ChainingHashTable4initEPvj(int8* %2318, int32 %2332)

declare void @_ZN5umbra17AggregationTarget4initEPS0_m(object umbra::AggregationTarget* %2554, int64 %2568)

declare void @_ZN5umbra12SortOperator4initEPS0_PKvS3_(object umbra::SortOperator* %2886, int8* %2900, int8* %2914)

define int32 @_9_planStep(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 1, global %3108, i64 0, global %3146, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 2, i32 3, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 5)
  return 6
}

declare void @_ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj(int8* %3273, int8* %3287, int64 %3301, object umbra::Relation::RestrictionInfo* %3315, int64 %3329, int32* %3343, int32 %3357)

declare void @_ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj(int8* %3443, int32 %3457, int32 %3471, int32 %3485, int32 %3499)

define int32 @_9_planStep0(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector4initEPv(int8* %3657)

define int32 @_9_planStep1(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector7destroyEPv(int8* %3809)

define int32 @_9_planStep2(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

declare void @_ZN5umbra13ExecutionPlan17setupParallelStepEPvj(int8* %3941, int32 %3955)

define int32 @_9_join_tablescan_supplier(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 80
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 4194304
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_6 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_7 = add i64 %RelationMappedLogic_cpp_320_6, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_8 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_7, %RelationMappedLogic_cpp_320_6
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_8
  %Text_cpp_355_ = call bool _ZN5umbra11TextRuntime11likeProgramENS_9data128_tEPKc (%RelationMappedLogic_cpp_324_, global %5645)
  condbr %Text_cpp_355_ %then %contScan

then:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_9 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_10 = mul i64 %Hash_cpp_380_9, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_10, i64 4)
  store int32 %RelationMappedLogic_cpp_308_, %ChainingHashTableLogic_cpp_78_
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 5
}

declare bool @_ZN5umbra11TextRuntime11likeProgramENS_9data128_tEPKc(data128 %5740, int8* %5754)

declare int8* @_ZN5umbra17ChainingHashTable9Collector7collectEmm(object umbra::ChainingHashTable::Collector* %6136, int64 %6150, int64 %6164)

define int32 @_9_planStep3(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 8)
  return 7
}

declare void @_ZN5umbra17TableScanOperator3Job7destroyEPv(int8* %6625)

declare void @_ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj(object umbra::ChainingHashTable* %6707, int8* %6721, int32 %6735)

declare void @_ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj(int8* %6775, int32 %6789)

define int32 @_9_join_tablescan_supplier_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 8
}

declare void @_ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE(object umbra::ChainingHashTable* %7033, object umbra::ChainingHashTable::Collector* %7047)

define int32 @_9_planStep4(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 224
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 0, global %7287, i64 1, global %7398, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 9, i32 10, i32 11)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 12)
  return 13
}

declare void @_ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv(int8* %7173)

declare void @_ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv(int8* %7205)

define int32 @_9_planStep5(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep6(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep7(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_tablescan_part(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 112
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2359296
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_6 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_7 = add i64 %RelationMappedLogic_cpp_320_6, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_8 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_7, %RelationMappedLogic_cpp_320_6
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_8
  %Char_cpp_113_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, 7953764044706414600
  condbr %Char_cpp_114_ %then %cont11

then:
  %Char_cpp_115_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_115_9 = cmpeq i64 %Char_cpp_115_, 892609380
  condbr %Char_cpp_115_9 %then10 %else

then10:
  br %cont

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_, d128 {7953764044706414600,892609380})
  br %cont

cont:
  %9840 = phi bool [bool true, %then10 %Char_cpp_118_, %else]
  br %cont11

cont11:
  %9883 = phi bool [%9840, %cont bool false, %loopTuples]
  %TypeLogic_cpp_278_ = not bool %9883
  condbr %TypeLogic_cpp_278_ %then12 %contScan

then12:
  %RelationMappedLogic_cpp_303_13 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 4456448
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_13, %localTid
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_14 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_15 = mul i64 %Hash_cpp_380_14, 2685821657736338717
  %InExpressionTranslator_cpp_145_ = lshr i64 %Hash_cpp_380_15, 60
  %InExpressionTranslator_cpp_145_16 = load int32 global %0, %InExpressionTranslator_cpp_145_
  %InExpressionTranslator_cpp_147_ = cmpne i32 %InExpressionTranslator_cpp_145_16, 0
  condbr %InExpressionTranslator_cpp_147_ %loopInTable %loopDoneInTable

loopInTable:
  %entry = phi i32 [%InExpressionTranslator_cpp_145_16, %then12 %InExpressionTranslator_cpp_164_, %cont17]
  %CodeGen_cpp_1397_ = zext i64 %entry
  %InExpressionTranslator_cpp_149_ = getelementptr int8 global %0, %CodeGen_cpp_1397_
  %InExpressionTranslator_cpp_153_ = getelementptr int8 %InExpressionTranslator_cpp_149_, i64 4
  %MaterializationHelper_cpp_230_ = load int32 %InExpressionTranslator_cpp_153_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %cont17 %else18

else18:
  br %in

cont17:
  %InExpressionTranslator_cpp_164_ = load int32 %InExpressionTranslator_cpp_149_
  %InExpressionTranslator_cpp_165_ = cmpne i32 %InExpressionTranslator_cpp_164_, 0
  condbr %InExpressionTranslator_cpp_165_ %loopInTable %loopDoneInTable

loopDoneInTable:
  br %notFound

notFound:
  br %in

in:
  %InExpressionTranslator_cpp_182_ = phi bool [bool false, %notFound bool true, %else18]
  condbr %InExpressionTranslator_cpp_182_ %then19 %contScan

then19:
  %RelationMappedLogic_cpp_303_20 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3407872
  %RelationMappedLogic_cpp_319_21 = getelementptr data128 %RelationMappedLogic_cpp_303_20, %localTid
  %RelationMappedLogic_cpp_320_22 = load int64 %RelationMappedLogic_cpp_319_21
  %RelationMappedLogic_cpp_320_23 = load int64 %RelationMappedLogic_cpp_319_21, i32 1
  %RelationMappedLogic_cpp_321_24 = trunc i32 %RelationMappedLogic_cpp_320_22
  %RelationMappedLogic_cpp_322_25 = cmpult i32 12, %RelationMappedLogic_cpp_321_24
  %RelationMappedLogic_cpp_322_26 = add i64 %RelationMappedLogic_cpp_320_23, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_27 = select i64 %RelationMappedLogic_cpp_322_25, %RelationMappedLogic_cpp_322_26, %RelationMappedLogic_cpp_320_23
  %RelationMappedLogic_cpp_324_28 = builddata128 d128 %RelationMappedLogic_cpp_320_22 %RelationMappedLogic_cpp_322_27
  %Text_cpp_355_ = call bool _ZN5umbra11TextRuntime11likeProgramENS_9data128_tEPKc (%RelationMappedLogic_cpp_324_28, global %11491)
  %Bool_cpp_69_ = not bool %Text_cpp_355_
  condbr %Bool_cpp_69_ %then29 %contScan

then29:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_30 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_31 = zext i64 %RelationMappedLogic_cpp_308_30
  %Hash_cpp_375_32 = crc32 i64 5961697176435608501, %Hash_cpp_265_31
  %Hash_cpp_376_33 = crc32 i64 2231409791114444147, %Hash_cpp_265_31
  %Hash_cpp_380_34 = rotr i64 %Hash_cpp_376_33, 32
  %Hash_cpp_380_35 = xor i64 %Hash_cpp_375_32, %Hash_cpp_380_34
  %Hash_cpp_380_36 = mul i64 %Hash_cpp_380_35, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_36, i64 40)
  store int32 %RelationMappedLogic_cpp_308_30, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %RelationMappedLogic_cpp_324_28)
  %MaterializationHelper_cpp_150_ = getelementptr int8 %MaterializationHelper_cpp_161_, i64 16
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_, %RelationMappedLogic_cpp_324_)
  %MaterializationHelper_cpp_150_37 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 32
  store int32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_150_37
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 12
}

declare bool @_ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_(data128 %9766, data128 %9780)

declare void @_ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_(data128* %12046, data128 %12060)

define int32 @_9_planStep8(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 416
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 15)
  return 14
}

define int32 @_9_join_tablescan_part_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 416
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 15
}

define int32 @_9_planStep9(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 2, global %3108, i64 0, global %13150, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 57440, i32 16, i32 17, i32 18)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 19)
  return 20
}

define int32 @_9_planStep10(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation4initEPS0_m (%Pipeline_cpp_276_, i64 45)
  %Pipeline_cpp_276_0 = getelementptr int8 %localState, i64 28736
  call void _ZN5umbra14Preaggregation4initEPS0_m (%Pipeline_cpp_276_0, i64 40)
  return 0
}

declare void @_ZN5umbra14Preaggregation4initEPS0_m(object umbra::Preaggregation* %13470, int64 %13484)

define int32 @_9_planStep11(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation7destroyEPS0_ (%Pipeline_cpp_276_)
  %Pipeline_cpp_276_0 = getelementptr int8 %localState, i64 28736
  call void _ZN5umbra14Preaggregation7destroyEPS0_ (%Pipeline_cpp_276_0)
  return 0
}

declare void @_ZN5umbra14Preaggregation7destroyEPS0_(object umbra::Preaggregation* %13727)

define int32 @_9_planStep12(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_groupby_join_join_tablescan_partsupp(int8* %trampoline, int8* %state, int8* %localState) [
  int8 %16186
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 36
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 416
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_6 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_7 = mul i64 %Hash_cpp_380_6, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_7)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_134, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_230_8 = load data128 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %MaterializationHelper_cpp_233_, i64 16
  %MaterializationHelper_cpp_230_9 = load data128 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_229_10 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 32
  %MaterializationHelper_cpp_230_11 = load int32 %MaterializationHelper_cpp_229_10
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_308_13 = load int32 %RelationMappedLogic_cpp_303_, %localTid
  store int8 i8 0, %16186
  %CompilationContext_cpp_214_14 = getelementptr int8 %state, i64 464
  %Hash_cpp_265_15 = zext i64 %RelationMappedLogic_cpp_308_13
  %Hash_cpp_375_16 = crc32 i64 5961697176435608501, %Hash_cpp_265_15
  %Hash_cpp_376_17 = crc32 i64 2231409791114444147, %Hash_cpp_265_15
  %Hash_cpp_380_18 = rotr i64 %Hash_cpp_376_17, 32
  %Hash_cpp_380_19 = xor i64 %Hash_cpp_375_16, %Hash_cpp_380_18
  %Hash_cpp_380_20 = mul i64 %Hash_cpp_380_19, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_22 = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_14, %Hash_cpp_380_20)
  %ChainingHashTableLogic_cpp_110_23 = isnotnull ptr %ChainingHashTableLogic_cpp_108_22
  condbr %ChainingHashTableLogic_cpp_110_23 %looploopHashChain24 %loopDoneloopHashChain25

looploopHashChain24:
  %hashEntry26 = phi ptr [%ChainingHashTableLogic_cpp_108_22, %else %ChainingHashTableLogic_cpp_136_, %continueProbe21]
  %ChainingHashTableLogic_cpp_115_27 = getelementptr int8 %hashEntry26, i64 16
  %MaterializationHelper_cpp_230_28 = load int32 %ChainingHashTableLogic_cpp_115_27
  %Integer_cpp_83_30 = cmpeq i32 %RelationMappedLogic_cpp_308_13, %MaterializationHelper_cpp_230_28
  %ConsumerContext_cpp_417_31 = not bool %Integer_cpp_83_30
  condbr %ConsumerContext_cpp_417_31 %continueProbe21 %else32

else32:
  store int8 i8 2, %16186
  br %loopDoneloopHashChain25

continueProbe21:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_14, %hashEntry26)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain24 %loopDoneloopHashChain25

loopDoneloopHashChain25:
  %HashJoinTranslator_cpp_531_ = load int8 %16186
  %HashJoinTranslator_cpp_531_33 = cmpeq i8 %HashJoinTranslator_cpp_531_, 0
  condbr %HashJoinTranslator_cpp_531_33 %then %cont133

then:
  %Hash_cpp_265_34 = zext i64 %MaterializationHelper_cpp_230_11
  %Hash_cpp_375_35 = crc32 i64 5961697176435608501, %Hash_cpp_265_34
  %Hash_cpp_376_36 = crc32 i64 2231409791114444147, %Hash_cpp_265_34
  %Hash_cpp_380_37 = rotr i64 %Hash_cpp_376_36, 32
  %Hash_cpp_380_38 = xor i64 %Hash_cpp_375_35, %Hash_cpp_380_37
  %Hash_cpp_380_39 = mul i64 %Hash_cpp_380_38, 2685821657736338717
  %Hash_cpp_383_ = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%MaterializationHelper_cpp_230_9, %Hash_cpp_380_39)
  %Hash_cpp_383_40 = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%MaterializationHelper_cpp_230_8, %Hash_cpp_383_)
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %PreaggregationLogic_cpp_19_ = getelementptr object umbra::Preaggregation %Pipeline_cpp_276_, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_20_ = and i64 %Hash_cpp_383_40, 1023
  %PreaggregationLogic_cpp_20_41 = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_19_, %PreaggregationLogic_cpp_20_
  %PreaggregationLogic_cpp_25_ = load object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_41, i32 0, i32 0
  %PreaggregationLogic_cpp_25_42 = cmpne i64 %PreaggregationLogic_cpp_25_, %Hash_cpp_383_40
  condbr %PreaggregationLogic_cpp_25_42 %then43 %else44

then43:
  %PreaggregationLogic_cpp_29_ = call ptr _ZN5umbra14Preaggregation8addEntryEm (%Pipeline_cpp_276_, %Hash_cpp_383_40)
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%PreaggregationLogic_cpp_29_, %MaterializationHelper_cpp_230_9)
  %MaterializationHelper_cpp_991_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 16
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_991_, %MaterializationHelper_cpp_230_8)
  %MaterializationHelper_cpp_983_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 32
  store int32 %MaterializationHelper_cpp_230_11, %MaterializationHelper_cpp_983_
  %GroupByTranslator_cpp_207_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 36
  store int8 i8 0, %GroupByTranslator_cpp_207_, i32 8
  store int64 i64 0, %GroupByTranslator_cpp_207_
  br %cont69

else44:
  %PreaggregationLogic_cpp_36_ = getelementptr object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_41, i32 1
  %MaterializationHelper_cpp_876_ = load data128 %PreaggregationLogic_cpp_36_
  %MaterializationHelper_cpp_876_45 = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 16
  %MaterializationHelper_cpp_876_46 = load data128 %MaterializationHelper_cpp_876_45
  %MaterializationHelper_cpp_876_47 = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 32
  %MaterializationHelper_cpp_876_48 = load int32 %MaterializationHelper_cpp_876_47
  %Char_cpp_113_ = extractdata128 i64 %MaterializationHelper_cpp_230_9
  %Char_cpp_113_49 = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, %Char_cpp_113_49
  condbr %Char_cpp_114_ %then50 %cont55

then50:
  %Char_cpp_115_ = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_115_51 = extractdata128 i64 %MaterializationHelper_cpp_230_9
  %Char_cpp_115_52 = cmpeq i64 %Char_cpp_115_51, %Char_cpp_115_
  condbr %Char_cpp_115_52 %then53 %else54

then53:
  br %cont

else54:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_230_9, %MaterializationHelper_cpp_876_)
  br %cont

cont:
  %18709 = phi bool [bool true, %then53 %Char_cpp_118_, %else54]
  br %cont55

cont55:
  %18745 = phi bool [%18709, %cont bool false, %else44]
  %ConsumerContext_cpp_417_56 = not bool %18745
  condbr %ConsumerContext_cpp_417_56 %then43 %else57

else57:
  %Text_cpp_86_ = extractdata128 i64 %MaterializationHelper_cpp_230_8
  %Text_cpp_86_58 = extractdata128 i64 %MaterializationHelper_cpp_876_46
  %Text_cpp_87_ = cmpeq i64 %Text_cpp_86_, %Text_cpp_86_58
  condbr %Text_cpp_87_ %then59 %cont65

then59:
  %Text_cpp_88_ = extractdata128 i64 %MaterializationHelper_cpp_876_46
  %Text_cpp_88_60 = extractdata128 i64 %MaterializationHelper_cpp_230_8
  %Text_cpp_88_61 = cmpeq i64 %Text_cpp_88_60, %Text_cpp_88_
  condbr %Text_cpp_88_61 %then62 %else63

then62:
  br %cont64

else63:
  %Text_cpp_91_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_230_8, %MaterializationHelper_cpp_876_46)
  br %cont64

cont64:
  %19073 = phi bool [bool true, %then62 %Text_cpp_91_, %else63]
  br %cont65

cont65:
  %19109 = phi bool [%19073, %cont64 bool false, %else57]
  %Integer_cpp_83_66 = cmpeq i32 %MaterializationHelper_cpp_230_11, %MaterializationHelper_cpp_876_48
  %ConsumerContext_cpp_407_ = and bool %19109, %Integer_cpp_83_66
  %ConsumerContext_cpp_417_67 = not bool %ConsumerContext_cpp_407_
  condbr %ConsumerContext_cpp_417_67 %then43 %else68

else68:
  br %cont69

cont69:
  %Hash_cpp_265_70 = zext i64 %MaterializationHelper_cpp_230_11
  %Hash_cpp_265_71 = zext i64 %RelationMappedLogic_cpp_308_13
  %Hash_cpp_269_ = shl i64 %Hash_cpp_265_71, 32
  %Hash_cpp_269_72 = or i64 %Hash_cpp_265_70, %Hash_cpp_269_
  %Hash_cpp_375_73 = crc32 i64 5961697176435608501, %Hash_cpp_269_72
  %Hash_cpp_376_74 = crc32 i64 2231409791114444147, %Hash_cpp_269_72
  %Hash_cpp_380_75 = rotr i64 %Hash_cpp_376_74, 32
  %Hash_cpp_380_76 = xor i64 %Hash_cpp_375_73, %Hash_cpp_380_75
  %Hash_cpp_380_77 = mul i64 %Hash_cpp_380_76, 2685821657736338717
  %Hash_cpp_383_78 = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%MaterializationHelper_cpp_230_9, %Hash_cpp_380_77)
  %Hash_cpp_383_79 = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%MaterializationHelper_cpp_230_8, %Hash_cpp_383_78)
  %Pipeline_cpp_276_80 = getelementptr int8 %localState, i64 28736
  %PreaggregationLogic_cpp_19_81 = getelementptr object umbra::Preaggregation %Pipeline_cpp_276_80, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_20_82 = and i64 %Hash_cpp_383_79, 1023
  %PreaggregationLogic_cpp_20_83 = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_19_81, %PreaggregationLogic_cpp_20_82
  %PreaggregationLogic_cpp_25_84 = load object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_83, i32 0, i32 0
  %PreaggregationLogic_cpp_25_85 = cmpne i64 %PreaggregationLogic_cpp_25_84, %Hash_cpp_383_79
  condbr %PreaggregationLogic_cpp_25_85 %then86 %else91

then86:
  %PreaggregationLogic_cpp_29_87 = call ptr _ZN5umbra14Preaggregation8addEntryEm (%Pipeline_cpp_276_80, %Hash_cpp_383_79)
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%PreaggregationLogic_cpp_29_87, %MaterializationHelper_cpp_230_9)
  %MaterializationHelper_cpp_991_88 = getelementptr int8 %PreaggregationLogic_cpp_29_87, i64 16
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_991_88, %MaterializationHelper_cpp_230_8)
  %MaterializationHelper_cpp_983_89 = getelementptr int8 %PreaggregationLogic_cpp_29_87, i64 32
  store int32 %MaterializationHelper_cpp_230_11, %MaterializationHelper_cpp_983_89
  %MaterializationHelper_cpp_983_90 = getelementptr int8 %PreaggregationLogic_cpp_29_87, i64 36
  store int32 %RelationMappedLogic_cpp_308_13, %MaterializationHelper_cpp_983_90
  br %cont132

else91:
  %PreaggregationLogic_cpp_36_92 = getelementptr object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_83, i32 1
  %MaterializationHelper_cpp_876_93 = load data128 %PreaggregationLogic_cpp_36_92
  %MaterializationHelper_cpp_876_94 = getelementptr int8 %PreaggregationLogic_cpp_36_92, i64 16
  %MaterializationHelper_cpp_876_95 = load data128 %MaterializationHelper_cpp_876_94
  %MaterializationHelper_cpp_876_96 = getelementptr int8 %PreaggregationLogic_cpp_36_92, i64 32
  %MaterializationHelper_cpp_876_97 = load int32 %MaterializationHelper_cpp_876_96
  %MaterializationHelper_cpp_876_98 = getelementptr int8 %PreaggregationLogic_cpp_36_92, i64 36
  %MaterializationHelper_cpp_876_99 = load int32 %MaterializationHelper_cpp_876_98
  %Char_cpp_113_100 = extractdata128 i64 %MaterializationHelper_cpp_230_9
  %Char_cpp_113_101 = extractdata128 i64 %MaterializationHelper_cpp_876_93
  %Char_cpp_114_102 = cmpeq i64 %Char_cpp_113_100, %Char_cpp_113_101
  condbr %Char_cpp_114_102 %then103 %cont111

then103:
  %Char_cpp_115_104 = extractdata128 i64 %MaterializationHelper_cpp_876_93
  %Char_cpp_115_105 = extractdata128 i64 %MaterializationHelper_cpp_230_9
  %Char_cpp_115_106 = cmpeq i64 %Char_cpp_115_105, %Char_cpp_115_104
  condbr %Char_cpp_115_106 %then107 %else108

then107:
  br %cont110

else108:
  %Char_cpp_118_109 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_230_9, %MaterializationHelper_cpp_876_93)
  br %cont110

cont110:
  %20977 = phi bool [bool true, %then107 %Char_cpp_118_109, %else108]
  br %cont111

cont111:
  %21013 = phi bool [%20977, %cont110 bool false, %else91]
  %ConsumerContext_cpp_417_112 = not bool %21013
  condbr %ConsumerContext_cpp_417_112 %then86 %else113

else113:
  %Text_cpp_86_114 = extractdata128 i64 %MaterializationHelper_cpp_230_8
  %Text_cpp_86_115 = extractdata128 i64 %MaterializationHelper_cpp_876_95
  %Text_cpp_87_116 = cmpeq i64 %Text_cpp_86_114, %Text_cpp_86_115
  condbr %Text_cpp_87_116 %then117 %cont125

then117:
  %Text_cpp_88_118 = extractdata128 i64 %MaterializationHelper_cpp_876_95
  %Text_cpp_88_119 = extractdata128 i64 %MaterializationHelper_cpp_230_8
  %Text_cpp_88_120 = cmpeq i64 %Text_cpp_88_119, %Text_cpp_88_118
  condbr %Text_cpp_88_120 %then121 %else122

then121:
  br %cont124

else122:
  %Text_cpp_91_123 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_230_8, %MaterializationHelper_cpp_876_95)
  br %cont124

cont124:
  %21357 = phi bool [bool true, %then121 %Text_cpp_91_123, %else122]
  br %cont125

cont125:
  %21393 = phi bool [%21357, %cont124 bool false, %else113]
  %Integer_cpp_83_126 = cmpeq i32 %MaterializationHelper_cpp_230_11, %MaterializationHelper_cpp_876_97
  %Integer_cpp_83_127 = cmpeq i32 %RelationMappedLogic_cpp_308_13, %MaterializationHelper_cpp_876_99
  %ConsumerContext_cpp_407_128 = and bool %21393, %Integer_cpp_83_126
  %ConsumerContext_cpp_407_129 = and bool %ConsumerContext_cpp_407_128, %Integer_cpp_83_127
  %ConsumerContext_cpp_417_130 = not bool %ConsumerContext_cpp_407_129
  condbr %ConsumerContext_cpp_417_130 %then86 %else131

else131:
  br %cont132

cont132:
  br %cont133

cont133:
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_134 = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_135 = isnotnull ptr %ChainingHashTableLogic_cpp_136_134
  condbr %ChainingHashTableLogic_cpp_137_135 %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 19
}

declare int8* @_ZN5umbra17ChainingHashTable6lookupEm(object umbra::ChainingHashTable* %15337, int64 %15351)

declare int8* @_ZN5umbra17ChainingHashTable10lookupNextEPv(object umbra::ChainingHashTable* %16909, int8* %16923)

declare int64 @_ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm(data128 %17335, int64 %17349)

declare int8* @_ZN5umbra14Preaggregation8addEntryEm(object umbra::Preaggregation* %17759, int64 %17773)

declare void @_ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_(data128* %17837, data128 %17851)

define int32 @_9_planStep13(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 512
  call void _ZN5umbra17AggregationTarget14exchangeTablesEPvm (%CompilationContext_cpp_214_, %state, i64 32)
  %CompilationContext_cpp_220_0 = getelementptr int8 %state, i64 56
  call void _ZN5umbra17AggregationTarget17setupAggregateJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 22)
  return 21
}

declare void @_ZN5umbra17AggregationTarget14exchangeTablesEPvm(object umbra::AggregationTarget* %22158, int8* %22172, int64 %22186)

declare void @_ZN5umbra17AggregationTarget17setupAggregateJobEPv(object umbra::AggregationTarget* %22277, int8* %22291)

define int32 @_9_groupby_join_join_tablescan_partsupp_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_47_ = load object umbra::AggregationTarget::Fragment* %localState
  %PreaggregationLogic_cpp_48_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 3
  %PreaggregationLogic_cpp_50_ = isnotnull ptr %PreaggregationLogic_cpp_48_
  condbr %PreaggregationLogic_cpp_50_ %loopChunk %loopDoneChunk

loopChunk:
  %chunk = phi ptr [%PreaggregationLogic_cpp_48_, %body %PreaggregationLogic_cpp_115_, %loopDoneChunkEntries]
  call void _ZN5umbra17AggregationTarget8Fragment9checkSizeEv (%PreaggregationLogic_cpp_47_)
  %PreaggregationLogic_cpp_55_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 0
  %PreaggregationLogic_cpp_56_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 1
  %PreaggregationLogic_cpp_60_ = getelementptr object umbra::Preaggregation::EntryChunk %chunk, i32 1
  %PreaggregationLogic_cpp_61_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 1
  %PreaggregationLogic_cpp_62_ = cmpne ptr %PreaggregationLogic_cpp_60_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_62_ %loopChunkEntries %loopDoneChunkEntries

loopChunkEntries:
  %entry = phi ptr [%PreaggregationLogic_cpp_60_, %loopChunk %PreaggregationLogic_cpp_110_, %continue]
  %PreaggregationLogic_cpp_66_ = load object umbra::Preaggregation::EntryHeader %entry, i32 0, i32 0
  %PreaggregationLogic_cpp_67_ = lshr i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_56_
  %PreaggregationLogic_cpp_67_0 = getelementptr object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_55_, %PreaggregationLogic_cpp_67_
  %PreaggregationLogic_cpp_69_ = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_71_ = isnotnull ptr %PreaggregationLogic_cpp_69_
  condbr %PreaggregationLogic_cpp_71_ %loopChain %loopDoneChain

loopChain:
  %chainEntry = phi ptr [%PreaggregationLogic_cpp_69_, %loopChunkEntries %PreaggregationLogic_cpp_82_, %noMatch]
  %PreaggregationLogic_cpp_75_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 0
  %PreaggregationLogic_cpp_75_1 = cmpeq i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_75_
  condbr %PreaggregationLogic_cpp_75_1 %then %noMatch

then:
  %GroupByTranslator_cpp_112_ = getelementptr object umbra::Preaggregation::EntryHeader %entry, i32 1
  %MaterializationHelper_cpp_876_ = load data128 %GroupByTranslator_cpp_112_
  %MaterializationHelper_cpp_876_2 = getelementptr int8 %GroupByTranslator_cpp_112_, i64 16
  %MaterializationHelper_cpp_876_3 = load data128 %MaterializationHelper_cpp_876_2
  %MaterializationHelper_cpp_876_4 = getelementptr int8 %GroupByTranslator_cpp_112_, i64 32
  %MaterializationHelper_cpp_876_5 = load int32 %MaterializationHelper_cpp_876_4
  %GroupByTranslator_cpp_113_ = getelementptr object umbra::Preaggregation::EntryHeader %chainEntry, i32 1
  %MaterializationHelper_cpp_876_6 = load data128 %GroupByTranslator_cpp_113_
  %MaterializationHelper_cpp_876_7 = getelementptr int8 %GroupByTranslator_cpp_113_, i64 16
  %MaterializationHelper_cpp_876_8 = load data128 %MaterializationHelper_cpp_876_7
  %MaterializationHelper_cpp_876_9 = getelementptr int8 %GroupByTranslator_cpp_113_, i64 32
  %MaterializationHelper_cpp_876_10 = load int32 %MaterializationHelper_cpp_876_9
  %Char_cpp_113_ = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_113_11 = extractdata128 i64 %MaterializationHelper_cpp_876_6
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, %Char_cpp_113_11
  condbr %Char_cpp_114_ %then12 %cont16

then12:
  %Char_cpp_115_ = extractdata128 i64 %MaterializationHelper_cpp_876_6
  %Char_cpp_115_13 = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_115_14 = cmpeq i64 %Char_cpp_115_13, %Char_cpp_115_
  condbr %Char_cpp_115_14 %then15 %else

then15:
  br %cont

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_876_6)
  br %cont

cont:
  %24242 = phi bool [bool true, %then15 %Char_cpp_118_, %else]
  br %cont16

cont16:
  %24278 = phi bool [%24242, %cont bool false, %then]
  %ConsumerContext_cpp_417_ = not bool %24278
  condbr %ConsumerContext_cpp_417_ %noMatch %else17

else17:
  %Text_cpp_86_ = extractdata128 i64 %MaterializationHelper_cpp_876_3
  %Text_cpp_86_18 = extractdata128 i64 %MaterializationHelper_cpp_876_8
  %Text_cpp_87_ = cmpeq i64 %Text_cpp_86_, %Text_cpp_86_18
  condbr %Text_cpp_87_ %then19 %cont25

then19:
  %Text_cpp_88_ = extractdata128 i64 %MaterializationHelper_cpp_876_8
  %Text_cpp_88_20 = extractdata128 i64 %MaterializationHelper_cpp_876_3
  %Text_cpp_88_21 = cmpeq i64 %Text_cpp_88_20, %Text_cpp_88_
  condbr %Text_cpp_88_21 %then22 %else23

then22:
  br %cont24

else23:
  %Text_cpp_91_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_876_3, %MaterializationHelper_cpp_876_8)
  br %cont24

cont24:
  %24604 = phi bool [bool true, %then22 %Text_cpp_91_, %else23]
  br %cont25

cont25:
  %24640 = phi bool [%24604, %cont24 bool false, %else17]
  %Integer_cpp_83_ = cmpeq i32 %MaterializationHelper_cpp_876_5, %MaterializationHelper_cpp_876_10
  %ConsumerContext_cpp_407_ = and bool %24640, %Integer_cpp_83_
  %ConsumerContext_cpp_417_26 = not bool %ConsumerContext_cpp_407_
  condbr %ConsumerContext_cpp_417_26 %noMatch %else27

else27:
  br %continue

noMatch:
  %PreaggregationLogic_cpp_82_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 1
  %PreaggregationLogic_cpp_83_ = isnotnull ptr %PreaggregationLogic_cpp_82_
  condbr %PreaggregationLogic_cpp_83_ %loopChain %loopDoneChain

loopDoneChain:
  store object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_69_, %entry, i32 0, i32 1
  store object umbra::Preaggregation::EntryHeader* %entry, %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_90_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 2
  %PreaggregationLogic_cpp_90_29 = add i64 %PreaggregationLogic_cpp_90_, 1
  store object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_90_29, %PreaggregationLogic_cpp_47_, i32 0, i32 2
  br %continue

continue:
  %PreaggregationLogic_cpp_110_ = getelementptr int8 %entry, i64 61
  %PreaggregationLogic_cpp_111_ = cmpne ptr %PreaggregationLogic_cpp_110_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_111_ %loopChunkEntries %loopDoneChunkEntries

loopDoneChunkEntries:
  %PreaggregationLogic_cpp_115_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 0
  %PreaggregationLogic_cpp_116_ = isnotnull ptr %PreaggregationLogic_cpp_115_
  condbr %PreaggregationLogic_cpp_116_ %loopChunk %loopDoneChunk

loopDoneChunk:
  store object umbra::AggregationTarget::Fragment ptr 0, %PreaggregationLogic_cpp_47_, i32 0, i32 3
  br %stepDone

stepDone:
  return 22
}

declare void @_ZN5umbra17AggregationTarget8Fragment9checkSizeEv(object umbra::AggregationTarget::Fragment* %22637)

define int32 @_9_planStep14(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25104
  call void _ZN5umbra17AggregationTarget14exchangeTablesEPvm (%CompilationContext_cpp_214_, %state, i64 28736)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17AggregationTarget17setupAggregateJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 24)
  return 23
}

define int32 @_9_groupby_join_join_tablescan_partsupp_extra15(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_47_ = load object umbra::AggregationTarget::Fragment* %localState
  %PreaggregationLogic_cpp_48_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 3
  %PreaggregationLogic_cpp_50_ = isnotnull ptr %PreaggregationLogic_cpp_48_
  condbr %PreaggregationLogic_cpp_50_ %loopChunk %loopDoneChunk

loopChunk:
  %chunk = phi ptr [%PreaggregationLogic_cpp_48_, %body %PreaggregationLogic_cpp_115_, %loopDoneChunkEntries]
  call void _ZN5umbra17AggregationTarget8Fragment9checkSizeEv (%PreaggregationLogic_cpp_47_)
  %PreaggregationLogic_cpp_55_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 0
  %PreaggregationLogic_cpp_56_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 1
  %PreaggregationLogic_cpp_60_ = getelementptr object umbra::Preaggregation::EntryChunk %chunk, i32 1
  %PreaggregationLogic_cpp_61_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 1
  %PreaggregationLogic_cpp_62_ = cmpne ptr %PreaggregationLogic_cpp_60_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_62_ %loopChunkEntries %loopDoneChunkEntries

loopChunkEntries:
  %entry = phi ptr [%PreaggregationLogic_cpp_60_, %loopChunk %PreaggregationLogic_cpp_110_, %continue]
  %PreaggregationLogic_cpp_66_ = load object umbra::Preaggregation::EntryHeader %entry, i32 0, i32 0
  %PreaggregationLogic_cpp_67_ = lshr i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_56_
  %PreaggregationLogic_cpp_67_0 = getelementptr object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_55_, %PreaggregationLogic_cpp_67_
  %PreaggregationLogic_cpp_69_ = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_71_ = isnotnull ptr %PreaggregationLogic_cpp_69_
  condbr %PreaggregationLogic_cpp_71_ %loopChain %loopDoneChain

loopChain:
  %chainEntry = phi ptr [%PreaggregationLogic_cpp_69_, %loopChunkEntries %PreaggregationLogic_cpp_82_, %noMatch]
  %PreaggregationLogic_cpp_75_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 0
  %PreaggregationLogic_cpp_75_1 = cmpeq i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_75_
  condbr %PreaggregationLogic_cpp_75_1 %then %noMatch

then:
  %DistinctStep_cpp_88_ = getelementptr object umbra::Preaggregation::EntryHeader %entry, i32 1
  %MaterializationHelper_cpp_876_ = load data128 %DistinctStep_cpp_88_
  %MaterializationHelper_cpp_876_2 = getelementptr int8 %DistinctStep_cpp_88_, i64 16
  %MaterializationHelper_cpp_876_3 = load data128 %MaterializationHelper_cpp_876_2
  %MaterializationHelper_cpp_876_4 = getelementptr int8 %DistinctStep_cpp_88_, i64 32
  %MaterializationHelper_cpp_876_5 = load int32 %MaterializationHelper_cpp_876_4
  %MaterializationHelper_cpp_876_6 = getelementptr int8 %DistinctStep_cpp_88_, i64 36
  %MaterializationHelper_cpp_876_7 = load int32 %MaterializationHelper_cpp_876_6
  %DistinctStep_cpp_89_ = getelementptr object umbra::Preaggregation::EntryHeader %chainEntry, i32 1
  %MaterializationHelper_cpp_876_8 = load data128 %DistinctStep_cpp_89_
  %MaterializationHelper_cpp_876_9 = getelementptr int8 %DistinctStep_cpp_89_, i64 16
  %MaterializationHelper_cpp_876_10 = load data128 %MaterializationHelper_cpp_876_9
  %MaterializationHelper_cpp_876_11 = getelementptr int8 %DistinctStep_cpp_89_, i64 32
  %MaterializationHelper_cpp_876_12 = load int32 %MaterializationHelper_cpp_876_11
  %MaterializationHelper_cpp_876_13 = getelementptr int8 %DistinctStep_cpp_89_, i64 36
  %MaterializationHelper_cpp_876_14 = load int32 %MaterializationHelper_cpp_876_13
  %Char_cpp_113_ = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_113_15 = extractdata128 i64 %MaterializationHelper_cpp_876_8
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, %Char_cpp_113_15
  condbr %Char_cpp_114_ %then16 %cont20

then16:
  %Char_cpp_115_ = extractdata128 i64 %MaterializationHelper_cpp_876_8
  %Char_cpp_115_17 = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_115_18 = cmpeq i64 %Char_cpp_115_17, %Char_cpp_115_
  condbr %Char_cpp_115_18 %then19 %else

then19:
  br %cont

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_876_8)
  br %cont

cont:
  %27835 = phi bool [bool true, %then19 %Char_cpp_118_, %else]
  br %cont20

cont20:
  %27871 = phi bool [%27835, %cont bool false, %then]
  %ConsumerContext_cpp_417_ = not bool %27871
  condbr %ConsumerContext_cpp_417_ %noMatch %else21

else21:
  %Text_cpp_86_ = extractdata128 i64 %MaterializationHelper_cpp_876_3
  %Text_cpp_86_22 = extractdata128 i64 %MaterializationHelper_cpp_876_10
  %Text_cpp_87_ = cmpeq i64 %Text_cpp_86_, %Text_cpp_86_22
  condbr %Text_cpp_87_ %then23 %cont29

then23:
  %Text_cpp_88_ = extractdata128 i64 %MaterializationHelper_cpp_876_10
  %Text_cpp_88_24 = extractdata128 i64 %MaterializationHelper_cpp_876_3
  %Text_cpp_88_25 = cmpeq i64 %Text_cpp_88_24, %Text_cpp_88_
  condbr %Text_cpp_88_25 %then26 %else27

then26:
  br %cont28

else27:
  %Text_cpp_91_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_876_3, %MaterializationHelper_cpp_876_10)
  br %cont28

cont28:
  %28197 = phi bool [bool true, %then26 %Text_cpp_91_, %else27]
  br %cont29

cont29:
  %28233 = phi bool [%28197, %cont28 bool false, %else21]
  %Integer_cpp_83_ = cmpeq i32 %MaterializationHelper_cpp_876_5, %MaterializationHelper_cpp_876_12
  %Integer_cpp_83_30 = cmpeq i32 %MaterializationHelper_cpp_876_7, %MaterializationHelper_cpp_876_14
  %ConsumerContext_cpp_407_ = and bool %28233, %Integer_cpp_83_
  %ConsumerContext_cpp_407_31 = and bool %ConsumerContext_cpp_407_, %Integer_cpp_83_30
  %ConsumerContext_cpp_417_32 = not bool %ConsumerContext_cpp_407_31
  condbr %ConsumerContext_cpp_417_32 %noMatch %else33

else33:
  br %continue

noMatch:
  %PreaggregationLogic_cpp_82_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 1
  %PreaggregationLogic_cpp_83_ = isnotnull ptr %PreaggregationLogic_cpp_82_
  condbr %PreaggregationLogic_cpp_83_ %loopChain %loopDoneChain

loopDoneChain:
  store object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_69_, %entry, i32 0, i32 1
  store object umbra::Preaggregation::EntryHeader* %entry, %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_90_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 2
  %PreaggregationLogic_cpp_90_34 = add i64 %PreaggregationLogic_cpp_90_, 1
  store object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_90_34, %PreaggregationLogic_cpp_47_, i32 0, i32 2
  br %continue

continue:
  %PreaggregationLogic_cpp_110_ = getelementptr int8 %entry, i64 56
  %PreaggregationLogic_cpp_111_ = cmpne ptr %PreaggregationLogic_cpp_110_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_111_ %loopChunkEntries %loopDoneChunkEntries

loopDoneChunkEntries:
  %PreaggregationLogic_cpp_115_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 0
  %PreaggregationLogic_cpp_116_ = isnotnull ptr %PreaggregationLogic_cpp_115_
  condbr %PreaggregationLogic_cpp_116_ %loopChunk %loopDoneChunk

loopDoneChunk:
  store object umbra::AggregationTarget::Fragment ptr 0, %PreaggregationLogic_cpp_47_, i32 0, i32 3
  br %stepDone

stepDone:
  return 24
}

define int32 @_9_planStep16(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25104
  call void _ZN5umbra17AggregationTarget12setupScanJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 26)
  return 25
}

declare void @_ZN5umbra17AggregationTarget12setupScanJobEPv(object umbra::AggregationTarget* %29210, int8* %29224)

define int32 @_9_groupby_join_join_tablescan_partsupp_extra17(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_127_ = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 0
  %PreaggregationLogic_cpp_127_0 = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 1
  %PreaggregationLogic_cpp_130_ = cmpne ptr %PreaggregationLogic_cpp_127_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_130_ %loopSlots %loopDoneSlots

loopSlots:
  %slot = phi ptr [%PreaggregationLogic_cpp_127_, %body %PreaggregationLogic_cpp_146_, %loopDoneChain]
  %PreaggregationLogic_cpp_135_ = load object umbra::Preaggregation::EntryHeader* %slot
  %PreaggregationLogic_cpp_136_ = isnotnull ptr %PreaggregationLogic_cpp_135_
  condbr %PreaggregationLogic_cpp_136_ %loopChain %loopDoneChain

loopChain:
  %iter = phi ptr [%PreaggregationLogic_cpp_135_, %loopSlots %PreaggregationLogic_cpp_142_, %cont]
  %PreaggregationLogic_cpp_140_ = getelementptr int8 %iter, i64 16
  %MaterializationHelper_cpp_876_ = load data128 %PreaggregationLogic_cpp_140_
  %MaterializationHelper_cpp_876_1 = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 16
  %MaterializationHelper_cpp_876_2 = load data128 %MaterializationHelper_cpp_876_1
  %MaterializationHelper_cpp_876_3 = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 32
  %MaterializationHelper_cpp_876_4 = load int32 %MaterializationHelper_cpp_876_3
  %Hash_cpp_265_ = zext i64 %MaterializationHelper_cpp_876_4
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_7 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_8 = mul i64 %Hash_cpp_380_7, 2685821657736338717
  %Hash_cpp_383_ = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%MaterializationHelper_cpp_876_, %Hash_cpp_380_8)
  %Hash_cpp_383_9 = call i64 _ZN5umbra11TextRuntime7hashCRCENS_9data128_tEm (%MaterializationHelper_cpp_876_2, %Hash_cpp_383_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 512
  %PreaggregationLogic_cpp_173_ = getelementptr object umbra::AggregationTarget %CompilationContext_cpp_214_, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_174_ = and i64 %Hash_cpp_383_9, 511
  %PreaggregationLogic_cpp_174_10 = getelementptr object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_173_, %PreaggregationLogic_cpp_174_
  %PreaggregationLogic_cpp_178_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_174_10, i32 0, i32 0
  %PreaggregationLogic_cpp_178_11 = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_174_10, i32 0, i32 1
  %PreaggregationLogic_cpp_178_12 = lshr i64 %Hash_cpp_383_9, %PreaggregationLogic_cpp_178_11
  %PreaggregationLogic_cpp_178_13 = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_178_, %PreaggregationLogic_cpp_178_12
  %PreaggregationLogic_cpp_183_ = isnull ptr %PreaggregationLogic_cpp_178_13
  condbr %PreaggregationLogic_cpp_183_ %cont %loopChain14

loopChain14:
  %iter15 = phi ptr [%PreaggregationLogic_cpp_178_13, %loopChain %PreaggregationLogic_cpp_194_, %notEqual]
  %PreaggregationLogic_cpp_200_ = getelementptr int8 %iter15, i64 16
  %MaterializationHelper_cpp_876_17 = load data128 %PreaggregationLogic_cpp_200_
  %MaterializationHelper_cpp_876_18 = getelementptr int8 %PreaggregationLogic_cpp_200_, i64 16
  %MaterializationHelper_cpp_876_19 = load data128 %MaterializationHelper_cpp_876_18
  %MaterializationHelper_cpp_876_20 = getelementptr int8 %PreaggregationLogic_cpp_200_, i64 32
  %MaterializationHelper_cpp_876_21 = load int32 %MaterializationHelper_cpp_876_20
  %Char_cpp_113_ = extractdata128 i64 %MaterializationHelper_cpp_876_17
  %Char_cpp_113_22 = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, %Char_cpp_113_22
  condbr %Char_cpp_114_ %then %cont27

notEqual:
  %PreaggregationLogic_cpp_194_ = load object umbra::Preaggregation::EntryHeader %iter15, i32 0, i32 1
  %PreaggregationLogic_cpp_196_ = isnull ptr %PreaggregationLogic_cpp_194_
  condbr %PreaggregationLogic_cpp_196_ %cont %loopChain14

then:
  %Char_cpp_115_ = extractdata128 i64 %MaterializationHelper_cpp_876_
  %Char_cpp_115_23 = extractdata128 i64 %MaterializationHelper_cpp_876_17
  %Char_cpp_115_24 = cmpeq i64 %Char_cpp_115_23, %Char_cpp_115_
  condbr %Char_cpp_115_24 %then25 %else

then25:
  br %cont26

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_876_17, %MaterializationHelper_cpp_876_)
  br %cont26

cont26:
  %31570 = phi bool [bool true, %then25 %Char_cpp_118_, %else]
  br %cont27

cont27:
  %31606 = phi bool [%31570, %cont26 bool false, %loopChain14]
  %ConsumerContext_cpp_417_ = not bool %31606
  condbr %ConsumerContext_cpp_417_ %notEqual %else28

else28:
  %Text_cpp_86_ = extractdata128 i64 %MaterializationHelper_cpp_876_19
  %Text_cpp_86_29 = extractdata128 i64 %MaterializationHelper_cpp_876_2
  %Text_cpp_87_ = cmpeq i64 %Text_cpp_86_, %Text_cpp_86_29
  condbr %Text_cpp_87_ %then30 %cont36

then30:
  %Text_cpp_88_ = extractdata128 i64 %MaterializationHelper_cpp_876_2
  %Text_cpp_88_31 = extractdata128 i64 %MaterializationHelper_cpp_876_19
  %Text_cpp_88_32 = cmpeq i64 %Text_cpp_88_31, %Text_cpp_88_
  condbr %Text_cpp_88_32 %then33 %else34

then33:
  br %cont35

else34:
  %Text_cpp_91_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%MaterializationHelper_cpp_876_19, %MaterializationHelper_cpp_876_2)
  br %cont35

cont35:
  %31932 = phi bool [bool true, %then33 %Text_cpp_91_, %else34]
  br %cont36

cont36:
  %31968 = phi bool [%31932, %cont35 bool false, %else28]
  %Integer_cpp_83_ = cmpeq i32 %MaterializationHelper_cpp_876_21, %MaterializationHelper_cpp_876_4
  %ConsumerContext_cpp_407_ = and bool %31968, %Integer_cpp_83_
  %ConsumerContext_cpp_417_37 = not bool %ConsumerContext_cpp_407_
  condbr %ConsumerContext_cpp_417_37 %notEqual %else38

else38:
  %GroupByTranslator_cpp_148_ = getelementptr int8 %PreaggregationLogic_cpp_200_, i64 36
  %AggregationLogic_cpp_1101_ = getelementptr int8 %GroupByTranslator_cpp_148_, i64 8
  %AggregationLogic_cpp_1102_ = atomicrmwxchg int8 i8 1, %AggregationLogic_cpp_1101_
  %CodeGen_cpp_399_ = cmpeq i8 %AggregationLogic_cpp_1102_, 1
  condbr %CodeGen_cpp_399_ %then39 %else40

then39:
  %CodeGen_cpp_400_ = call i8 _ZN5umbra16RuntimeFunctions12lockSpinlockEPvh (%AggregationLogic_cpp_1101_, i8 1)
  br %cont41

else40:
  br %cont41

cont41:
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_148_
  %Aggregate_cpp_166_ = add i64 %MaterializationHelper_cpp_977_, 1
  store int64 %Aggregate_cpp_166_, %GroupByTranslator_cpp_148_
  atomicstore int8 i8 0, %AggregationLogic_cpp_1101_
  br %cont

cont:
  %PreaggregationLogic_cpp_142_ = load object umbra::Preaggregation::EntryHeader %iter, i32 0, i32 1
  %PreaggregationLogic_cpp_143_ = isnotnull ptr %PreaggregationLogic_cpp_142_
  condbr %PreaggregationLogic_cpp_143_ %loopChain %loopDoneChain

loopDoneChain:
  %PreaggregationLogic_cpp_146_ = getelementptr object umbra::Preaggregation::EntryHeader* %slot, i32 1
  %PreaggregationLogic_cpp_147_ = cmpne ptr %PreaggregationLogic_cpp_146_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_147_ %loopSlots %loopDoneSlots

loopDoneSlots:
  br %stepDone

stepDone:
  return 26
}

declare int8 @_ZN5umbra16RuntimeFunctions12lockSpinlockEPvh(int8* %32335, int8 %32349)

define int32 @_9_planStep18(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 512
  call void _ZN5umbra17AggregationTarget12setupScanJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 192, i32 27, i32 28, i32 29)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 30)
  return 31
}

define int32 @_9_planStep19(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%Pipeline_cpp_276_, %state, global %2752)
  return 0
}

define int32 @_9_planStep20(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra12SortOperator7destroyEPS0_(object umbra::SortOperator* %33368)

define int32 @_9_planStep21(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_sort_groupby(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_127_ = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 0
  %PreaggregationLogic_cpp_127_0 = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 1
  %PreaggregationLogic_cpp_130_ = cmpne ptr %PreaggregationLogic_cpp_127_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_130_ %loopSlots %loopDoneSlots

loopSlots:
  %slot = phi ptr [%PreaggregationLogic_cpp_127_, %body %PreaggregationLogic_cpp_146_, %loopDoneChain]
  %PreaggregationLogic_cpp_135_ = load object umbra::Preaggregation::EntryHeader* %slot
  %PreaggregationLogic_cpp_136_ = isnotnull ptr %PreaggregationLogic_cpp_135_
  condbr %PreaggregationLogic_cpp_136_ %loopChain %loopDoneChain

loopChain:
  %iter = phi ptr [%PreaggregationLogic_cpp_135_, %loopSlots %PreaggregationLogic_cpp_142_, %loopChain]
  %PreaggregationLogic_cpp_140_ = getelementptr int8 %iter, i64 16
  %MaterializationHelper_cpp_876_ = load data128 %PreaggregationLogic_cpp_140_
  %MaterializationHelper_cpp_876_1 = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 16
  %MaterializationHelper_cpp_876_2 = load data128 %MaterializationHelper_cpp_876_1
  %MaterializationHelper_cpp_876_3 = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 32
  %MaterializationHelper_cpp_876_4 = load int32 %MaterializationHelper_cpp_876_3
  %GroupByTranslator_cpp_248_ = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 36
  %MaterializationHelper_cpp_876_5 = load int64 %GroupByTranslator_cpp_248_
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %SortTranslator_cpp_310_ = call ptr _ZN5umbra12SortOperator10storeTupleEm (%Pipeline_cpp_276_, i64 44)
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%SortTranslator_cpp_310_, %MaterializationHelper_cpp_876_)
  %MaterializationHelper_cpp_150_ = getelementptr int8 %SortTranslator_cpp_310_, i64 16
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_, %MaterializationHelper_cpp_876_2)
  %MaterializationHelper_cpp_150_6 = getelementptr int8 %SortTranslator_cpp_310_, i64 32
  store int64 %MaterializationHelper_cpp_876_5, %MaterializationHelper_cpp_150_6
  %MaterializationHelper_cpp_150_7 = getelementptr int8 %SortTranslator_cpp_310_, i64 40
  store int32 %MaterializationHelper_cpp_876_4, %MaterializationHelper_cpp_150_7
  %PreaggregationLogic_cpp_142_ = load object umbra::Preaggregation::EntryHeader %iter, i32 0, i32 1
  %PreaggregationLogic_cpp_143_ = isnotnull ptr %PreaggregationLogic_cpp_142_
  condbr %PreaggregationLogic_cpp_143_ %loopChain %loopDoneChain

loopDoneChain:
  %PreaggregationLogic_cpp_146_ = getelementptr object umbra::Preaggregation::EntryHeader* %slot, i32 1
  %PreaggregationLogic_cpp_147_ = cmpne ptr %PreaggregationLogic_cpp_146_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_147_ %loopSlots %loopDoneSlots

loopDoneSlots:
  br %stepDone

stepDone:
  return 30
}

declare int8* @_ZN5umbra12SortOperator10storeTupleEm(object umbra::SortOperator* %34397, int64 %34411)

define int32 @_9_planStep22(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 33)
  return 32
}

define int32 @_9_sort_groupby_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  call void _ZN5umbra12SortOperator9sortLocalEv (%Pipeline_cpp_470_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 49696
  call void _ZN5umbra12SortOperator17donateTupleMemoryERS0_ (%Pipeline_cpp_470_, %CompilationContext_cpp_214_)
  br %stepDone

stepDone:
  return 33
}

declare void @_ZN5umbra12SortOperator9sortLocalEv(object umbra::SortOperator* %35307)

declare void @_ZN5umbra12SortOperator17donateTupleMemoryERS0_(object umbra::SortOperator* %35389, object umbra::SortOperator* %35403)

define int32 @_9_planStep23(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 49696
  call void _ZN5umbra12SortOperator17prepareSortGlobalEPvPKv (%CompilationContext_cpp_214_, %state, global %35547)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 49696
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_ (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 35)
  return 34
}

declare void @_ZN5umbra12SortOperator17prepareSortGlobalEPvPKv(object umbra::SortOperator* %35631, int8* %35645, int8* %35659)

declare void @_ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_(int8* %35800, object umbra::SortOperator* %35814)

define int32 @_9_sort_groupby_extra24(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_252_ = load int32 %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 49696
  call void _ZN5umbra12SortOperator10sortGlobalEPvPKvj (%CompilationContext_cpp_214_, %state, global %35547, %SortTranslator_cpp_252_)
  br %stepDone

stepDone:
  return 35
}

declare void @_ZN5umbra12SortOperator10sortGlobalEPvPKvj(object umbra::SortOperator* %36064, int8* %36078, int8* %36092, int32 %36106)

define int32 @_9_planStep25(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 49696
  call void _ZN5umbra12SortOperator3Job4initEPvRS0_b (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, bool true)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 32, i32 36, i32 37, i32 38)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 39)
  return 40
}

declare void @_ZN5umbra12SortOperator3Job4initEPvRS0_b(int8* %36358, object umbra::SortOperator* %36372, bool %36386)

define int32 @_9_planStep26(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep27(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep28(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_map_sort(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_326_ = load object umbra::SortOperator::Morsel %localState, i32 0, i32 0
  %SortTranslator_cpp_326_0 = load object umbra::SortOperator::Morsel %localState, i32 0, i32 1
  %SortTranslator_cpp_329_ = cmpne ptr %SortTranslator_cpp_326_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_329_ %loopTuples %loopDoneTuples

loopTuples:
  %tuple = phi ptr [%SortTranslator_cpp_326_, %body %SortTranslator_cpp_341_, %cont]
  %CodeGen_hpp_1103_ = load int8* %tuple
  %MaterializationHelper_cpp_230_ = load data128 %CodeGen_hpp_1103_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %CodeGen_hpp_1103_, i64 16
  %MaterializationHelper_cpp_230_1 = load data128 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_229_2 = getelementptr int8 %CodeGen_hpp_1103_, i64 32
  %MaterializationHelper_cpp_230_3 = load int64 %MaterializationHelper_cpp_229_2
  %MaterializationHelper_cpp_229_4 = getelementptr int8 %CodeGen_hpp_1103_, i64 40
  %MaterializationHelper_cpp_230_5 = load int32 %MaterializationHelper_cpp_229_4
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 120
  %sql_cpp_105_ = atomicrmwxchg int8 i8 1, %CompilationContext_cpp_214_
  %CodeGen_cpp_399_ = cmpeq i8 %sql_cpp_105_, 1
  condbr %CodeGen_cpp_399_ %then %else

then:
  %CodeGen_cpp_400_ = call i8 _ZN5umbra16RuntimeFunctions12lockSpinlockEPvh (%CompilationContext_cpp_214_, i8 1)
  br %cont

else:
  br %cont

cont:
  call void _ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55b2836317c0, i64 720575940547051520, %MaterializationHelper_cpp_230_)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %37809, i32 1)
  call void _ZN5umbra11TextRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55b2836317c0, i64 792633534836637696, %MaterializationHelper_cpp_230_1)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %37809, i32 1)
  call void _ZN5umbra14IntegerRuntime6outputERNS_12OutputTargetENS_4TypeEi (ptr 0x55b2836317c0, i64 288230376151711744, %MaterializationHelper_cpp_230_5)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %37809, i32 1)
  call void _ZN5umbra13BigIntRuntime6outputERNS_12OutputTargetENS_4TypeEl (ptr 0x55b2836317c0, i64 360287970189639680, %MaterializationHelper_cpp_230_3)
  call void _ZN5umbra16RuntimeFunctions13printNlResultEv ()
  atomicstore int8 i8 0, %CompilationContext_cpp_214_
  call void _ZN5umbra16RuntimeFunctions15bumpResultValueEPv (%state)
  %SortTranslator_cpp_341_ = getelementptr int8* %tuple, i32 1
  %SortTranslator_cpp_342_ = cmpne ptr %SortTranslator_cpp_341_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_342_ %loopTuples %loopDoneTuples

loopDoneTuples:
  br %stepDone

stepDone:
  return 39
}

declare void @_ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %37741, int64 %37755, data128 %37769)

declare void @_ZN5umbra16RuntimeFunctions17printStringResultEPKcj(int8* %37831, int32 %37845)

declare void @_ZN5umbra11TextRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %37895, int64 %37909, data128 %37923)

declare void @_ZN5umbra14IntegerRuntime6outputERNS_12OutputTargetENS_4TypeEi(object umbra::OutputTarget* %37999, int64 %38013, int32 %38027)

declare void @_ZN5umbra13BigIntRuntime6outputERNS_12OutputTargetENS_4TypeEl(object umbra::OutputTarget* %38103, int64 %38117, int64 %38131)

declare void @_ZN5umbra16RuntimeFunctions13printNlResultEv()

declare void @_ZN5umbra16RuntimeFunctions15bumpResultValueEPv(int8* %38207)

define int32 @_9_planStep29(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  return 0
}

define int32 @_9_cleanup(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 320
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_1)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 416
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_2)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_3)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 512
  call void _ZN5umbra17AggregationTarget7destroyEPS0_ (%CompilationContext_cpp_214_4)
  %CompilationContext_cpp_214_5 = getelementptr int8 %state, i64 25104
  call void _ZN5umbra17AggregationTarget7destroyEPS0_ (%CompilationContext_cpp_214_5)
  %CompilationContext_cpp_214_6 = getelementptr int8 %state, i64 49696
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%CompilationContext_cpp_214_6)
  return 0
}

declare void @_ZN5umbra14RelationMapped6Reader7destroyEPv(int8* %38629)

declare void @_ZN5umbra17ChainingHashTable7destroyEPv(int8* %38850)

declare void @_ZN5umbra17AggregationTarget7destroyEPS0_(object umbra::AggregationTarget* %39002)
`;
