export const tpch10 = `const %1348[29] ="\\001\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\024\\000\\000\\000\\000\\000\\000\\000\\000"

const %1704[0] =""

const %1742[8] ="\\000\\000\\000\\000\\001\\000\\000\\000"

const %5809[72] ="\\004\\000\\000\\000\\012\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\016\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000iU\\000\\000n_%\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\0*)_%\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %5920[12] ="\\000\\000\\000\\000\\001\\000\\000\\000\\004\\000\\000\\000"

const %9316[72] ="\\010\\000\\000\\000\\002\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\011\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000iU\\000\\000R\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %9427[16] ="\\000\\000\\000\\000\\005\\000\\000\\000\\006\\000\\000\\000\\010\\000\\000\\000"

const %13854[28] ="\\000\\000\\000\\000\\001\\000\\000\\000\\002\\000\\000\\000\\003\\000\\000\\000\\004\\000\\000\\000\\005\\000\\000\\000\\007\\000\\000\\000"

const %28032[8] =" \\000\\000\\000\\000\\000\\000\\000"

const %30776[1] =" "

define int32 @_10_init(int8* %trampoline, int8* %state, int8* %localState) [
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
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_3)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 560
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_4, i32 0)
  %CompilationContext_cpp_214_5 = getelementptr int8 %state, i64 608
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_5, i32 0)
  %CompilationContext_cpp_214_6 = getelementptr int8 %state, i64 656
  call void _ZN5umbra17AggregationTarget4initEPS0_m (%CompilationContext_cpp_214_6, i64 108)
  %CompilationContext_cpp_214_8 = getelementptr int8 %state, i64 25248
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%CompilationContext_cpp_214_8, %state, global %1348)
  return 1
}

define int32 @_10_compare(int8* %trampoline, int8* %left, int8* %right) [
] {
body:
  %MaterializationHelper_cpp_230_ = load data128 %left
  %MaterializationHelper_cpp_230_0 = load data128 %right
  %BigNumeric_cpp_448_ = call i32 _ZN5umbra17BigNumericRuntime7compareENS_9data128_tES1_ (%MaterializationHelper_cpp_230_0, %MaterializationHelper_cpp_230_)
  return %BigNumeric_cpp_448_
}

declare int32 @_ZN5umbra17BigNumericRuntime7compareENS_9data128_tES1_(data128 %364, data128 %378)

declare void @_ZN5umbra14RelationMapped6Reader4initEPv(int8* %518)

declare void @_ZN5umbra17ChainingHashTable4initEPvj(int8* %821, int32 %835)

declare void @_ZN5umbra17AggregationTarget4initEPS0_m(object umbra::AggregationTarget* %1247, int64 %1261)

declare void @_ZN5umbra12SortOperator4initEPS0_PKvS3_(object umbra::SortOperator* %1482, int8* %1496, int8* %1510)

define int32 @_10_planStep(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 6, global %1704, i64 0, global %1742, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 2, i32 3, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 5)
  return 6
}

declare void @_ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj(int8* %1869, int8* %1883, int64 %1897, object umbra::Relation::RestrictionInfo* %1911, int64 %1925, int32* %1939, int32 %1953)

declare void @_ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj(int8* %2039, int32 %2053, int32 %2067, int32 %2081, int32 %2095)

define int32 @_10_planStep0(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector4initEPv(int8* %2277)

define int32 @_10_planStep1(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector7destroyEPv(int8* %2429)

define int32 @_10_planStep2(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

declare void @_ZN5umbra13ExecutionPlan17setupParallelStepEPvj(int8* %2561, int32 %2575)

define int32 @_10_join_tablescan_nation(int8* %trampoline, int8* %state, int8* %localState) [
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
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 40
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_6 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_7 = add i64 %RelationMappedLogic_cpp_320_6, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_8 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_7, %RelationMappedLogic_cpp_320_6
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_8
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_9 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_10 = mul i64 %Hash_cpp_380_9, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_10, i64 20)
  store int32 %RelationMappedLogic_cpp_308_, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %RelationMappedLogic_cpp_324_)
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

declare int8* @_ZN5umbra17ChainingHashTable9Collector7collectEmm(object umbra::ChainingHashTable::Collector* %4539, int64 %4553, int64 %4567)

declare void @_ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_(data128* %4713, data128 %4727)

define int32 @_10_planStep3(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 608
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 8)
  return 7
}

declare void @_ZN5umbra17TableScanOperator3Job7destroyEPv(int8* %5147)

declare void @_ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj(object umbra::ChainingHashTable* %5229, int8* %5243, int32 %5257)

declare void @_ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj(int8* %5297, int32 %5311)

define int32 @_10_join_tablescan_nation_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 608
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 8
}

declare void @_ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE(object umbra::ChainingHashTable* %5555, object umbra::ChainingHashTable::Collector* %5569)

define int32 @_10_planStep4(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 224
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 4, global %5809, i64 1, global %5920, i32 3)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 9, i32 10, i32 11)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 12)
  return 13
}

declare void @_ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv(int8* %5695)

declare void @_ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv(int8* %5727)

define int32 @_10_planStep5(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_10_planStep6(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_10_planStep7(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_join_tablescan_orders(int8* %trampoline, int8* %state, int8* %localState) [
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
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 76
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1310720
  %RelationMappedLogic_cpp_310_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %Date_cpp_57_ = cmpule i32 %RelationMappedLogic_cpp_310_, 2449353
  %Date_cpp_57_6 = cmpule i32 2449262, %RelationMappedLogic_cpp_310_
  %TableScanTranslator_cpp_425_ = and bool %Date_cpp_57_6, %Date_cpp_57_
  condbr %TableScanTranslator_cpp_425_ %then %contScan

then:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %RelationMappedLogic_cpp_303_7 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_308_8 = load int32 %RelationMappedLogic_cpp_303_7, %localTid
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_9 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_10 = mul i64 %Hash_cpp_380_9, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_10, i64 8)
  store int32 %RelationMappedLogic_cpp_308_, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  store int32 %RelationMappedLogic_cpp_308_8, %MaterializationHelper_cpp_161_
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

define int32 @_10_planStep8(int8* %trampoline, int8* %state, int8* %localState) [
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

define int32 @_10_join_tablescan_orders_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 416
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 15
}

define int32 @_10_planStep9(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 5, global %9316, i64 1, global %9427, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 16, i32 17, i32 18)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 19)
  return 20
}

define int32 @_10_planStep10(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_10_planStep11(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_10_planStep12(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_join_join_tablescan_lineitem(int8* %trampoline, int8* %state, int8* %localState) [
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
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 116
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3145728
  %RelationMappedLogic_cpp_310_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %Char1_cpp_75_ = cmpeq i32 %RelationMappedLogic_cpp_310_, 82
  condbr %Char1_cpp_75_ %then %contScan

then:
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
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %then %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_230_8 = load int32 %MaterializationHelper_cpp_233_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_303_10 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1572864
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_10, %localTid
  %RelationMappedLogic_cpp_303_11 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2097152
  %RelationMappedLogic_cpp_309_12 = load int64 %RelationMappedLogic_cpp_303_11, %localTid
  %Hash_cpp_265_13 = zext i64 %MaterializationHelper_cpp_230_8
  %Hash_cpp_375_14 = crc32 i64 5961697176435608501, %Hash_cpp_265_13
  %Hash_cpp_376_15 = crc32 i64 2231409791114444147, %Hash_cpp_265_13
  %Hash_cpp_380_16 = rotr i64 %Hash_cpp_376_15, 32
  %Hash_cpp_380_17 = xor i64 %Hash_cpp_375_14, %Hash_cpp_380_16
  %Hash_cpp_380_18 = mul i64 %Hash_cpp_380_17, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_18, i64 20)
  store int32 %MaterializationHelper_cpp_230_8, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  store int64 %RelationMappedLogic_cpp_309_, %MaterializationHelper_cpp_161_
  %MaterializationHelper_cpp_150_ = getelementptr int8 %MaterializationHelper_cpp_161_, i64 8
  store int64 %RelationMappedLogic_cpp_309_12, %MaterializationHelper_cpp_150_
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain %loopDoneloopHashChain

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

declare int8* @_ZN5umbra17ChainingHashTable6lookupEm(object umbra::ChainingHashTable* %11606, int64 %11620)

declare int8* @_ZN5umbra17ChainingHashTable10lookupNextEPv(object umbra::ChainingHashTable* %12875, int8* %12889)

define int32 @_10_planStep13(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 560
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 22)
  return 21
}

define int32 @_10_join_join_tablescan_lineitem_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 560
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 22
}

define int32 @_10_planStep14(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 464
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 3, global %1704, i64 0, global %13854, i32 7)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 28736, i32 23, i32 24, i32 25)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 26)
  return 27
}

define int32 @_10_planStep15(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation4initEPS0_m (%Pipeline_cpp_276_, i64 108)
  return 0
}

declare void @_ZN5umbra14Preaggregation4initEPS0_m(object umbra::Preaggregation* %14204, int64 %14218)

define int32 @_10_planStep16(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra14Preaggregation7destroyEPS0_(object umbra::Preaggregation* %14374)

define int32 @_10_planStep17(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_groupby_join_join_tablescan_customer(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  %CompilationContext_cpp_266_ = load object umbra::GlobalStateHeader %state, i32 0, i32 0
  %CompilationContext_cpp_267_ = getelementptr object umbra::Transaction %CompilationContext_cpp_266_, i32 0, i32 2
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 96
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
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 560
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
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_86, %continueProbe85]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_230_8 = load int64 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %MaterializationHelper_cpp_233_, i64 8
  %MaterializationHelper_cpp_230_9 = load int64 %MaterializationHelper_cpp_229_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %checkCancellation %else

else:
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2359296
  %RelationMappedLogic_cpp_308_11 = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_12 = getelementptr int8 %state, i64 608
  %Hash_cpp_265_13 = zext i64 %RelationMappedLogic_cpp_308_11
  %Hash_cpp_375_14 = crc32 i64 5961697176435608501, %Hash_cpp_265_13
  %Hash_cpp_376_15 = crc32 i64 2231409791114444147, %Hash_cpp_265_13
  %Hash_cpp_380_16 = rotr i64 %Hash_cpp_376_15, 32
  %Hash_cpp_380_17 = xor i64 %Hash_cpp_375_14, %Hash_cpp_380_16
  %Hash_cpp_380_18 = mul i64 %Hash_cpp_380_17, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_19 = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_12, %Hash_cpp_380_18)
  %ChainingHashTableLogic_cpp_110_20 = isnotnull ptr %ChainingHashTableLogic_cpp_108_19
  condbr %ChainingHashTableLogic_cpp_110_20 %looploopHashChain21 %loopDoneloopHashChain22

looploopHashChain21:
  %hashEntry23 = phi ptr [%ChainingHashTableLogic_cpp_108_19, %else %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_24 = getelementptr int8 %hashEntry23, i64 16
  %MaterializationHelper_cpp_230_25 = load int32 %ChainingHashTableLogic_cpp_115_24
  %MaterializationHelper_cpp_233_26 = getelementptr int8 %ChainingHashTableLogic_cpp_115_24, i64 4
  %MaterializationHelper_cpp_230_27 = load data128 %MaterializationHelper_cpp_233_26
  %Integer_cpp_83_29 = cmpeq i32 %RelationMappedLogic_cpp_308_11, %MaterializationHelper_cpp_230_25
  %ConsumerContext_cpp_417_30 = not bool %Integer_cpp_83_29
  condbr %ConsumerContext_cpp_417_30 %continueProbe %else31

else31:
  %RelationMappedLogic_cpp_303_32 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_32, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_33 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_34 = add i64 %RelationMappedLogic_cpp_320_33, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_35 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_34, %RelationMappedLogic_cpp_320_33
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_35
  %RelationMappedLogic_cpp_303_36 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3670016
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_36, %localTid
  %RelationMappedLogic_cpp_303_37 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2621440
  %RelationMappedLogic_cpp_319_38 = getelementptr data128 %RelationMappedLogic_cpp_303_37, %localTid
  %RelationMappedLogic_cpp_320_39 = load int64 %RelationMappedLogic_cpp_319_38
  %RelationMappedLogic_cpp_320_40 = load int64 %RelationMappedLogic_cpp_319_38, i32 1
  %RelationMappedLogic_cpp_321_41 = trunc i32 %RelationMappedLogic_cpp_320_39
  %RelationMappedLogic_cpp_322_42 = cmpult i32 12, %RelationMappedLogic_cpp_321_41
  %RelationMappedLogic_cpp_322_43 = add i64 %RelationMappedLogic_cpp_320_40, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_44 = select i64 %RelationMappedLogic_cpp_322_42, %RelationMappedLogic_cpp_322_43, %RelationMappedLogic_cpp_320_40
  %RelationMappedLogic_cpp_324_45 = builddata128 d128 %RelationMappedLogic_cpp_320_39 %RelationMappedLogic_cpp_322_44
  %RelationMappedLogic_cpp_303_46 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1310720
  %RelationMappedLogic_cpp_319_47 = getelementptr data128 %RelationMappedLogic_cpp_303_46, %localTid
  %RelationMappedLogic_cpp_320_48 = load int64 %RelationMappedLogic_cpp_319_47
  %RelationMappedLogic_cpp_320_49 = load int64 %RelationMappedLogic_cpp_319_47, i32 1
  %RelationMappedLogic_cpp_321_50 = trunc i32 %RelationMappedLogic_cpp_320_48
  %RelationMappedLogic_cpp_322_51 = cmpult i32 12, %RelationMappedLogic_cpp_321_50
  %RelationMappedLogic_cpp_322_52 = add i64 %RelationMappedLogic_cpp_320_49, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_53 = select i64 %RelationMappedLogic_cpp_322_51, %RelationMappedLogic_cpp_322_52, %RelationMappedLogic_cpp_320_49
  %RelationMappedLogic_cpp_324_54 = builddata128 d128 %RelationMappedLogic_cpp_320_48 %RelationMappedLogic_cpp_322_53
  %RelationMappedLogic_cpp_303_55 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 5242880
  %RelationMappedLogic_cpp_319_56 = getelementptr data128 %RelationMappedLogic_cpp_303_55, %localTid
  %RelationMappedLogic_cpp_320_57 = load int64 %RelationMappedLogic_cpp_319_56
  %RelationMappedLogic_cpp_320_58 = load int64 %RelationMappedLogic_cpp_319_56, i32 1
  %RelationMappedLogic_cpp_321_59 = trunc i32 %RelationMappedLogic_cpp_320_57
  %RelationMappedLogic_cpp_322_60 = cmpult i32 12, %RelationMappedLogic_cpp_321_59
  %RelationMappedLogic_cpp_322_61 = add i64 %RelationMappedLogic_cpp_320_58, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_62 = select i64 %RelationMappedLogic_cpp_322_60, %RelationMappedLogic_cpp_322_61, %RelationMappedLogic_cpp_320_58
  %RelationMappedLogic_cpp_324_63 = builddata128 d128 %RelationMappedLogic_cpp_320_57 %RelationMappedLogic_cpp_322_62
  br %cont

cont:
  %Numeric_cpp_763_ = checkedssub i64 100, %MaterializationHelper_cpp_230_9 %cont64 %overflow

cont64:
  %BigNumeric_cpp_863_ = ashr i64 %MaterializationHelper_cpp_230_8, 63
  %BigNumeric_cpp_863_65 = builddata128 d128 %MaterializationHelper_cpp_230_8 %BigNumeric_cpp_863_
  %BigNumeric_cpp_863_66 = ashr i64 %Numeric_cpp_763_, 63
  %BigNumeric_cpp_863_67 = builddata128 d128 %Numeric_cpp_763_ %BigNumeric_cpp_863_66
  %Numeric_cpp_698_ = call d128 _ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_ (%BigNumeric_cpp_863_65, %BigNumeric_cpp_863_67)
  %Hash_cpp_265_68 = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_69 = crc32 i64 5961697176435608501, %Hash_cpp_265_68
  %Hash_cpp_376_70 = crc32 i64 2231409791114444147, %Hash_cpp_265_68
  %Hash_cpp_380_71 = rotr i64 %Hash_cpp_376_70, 32
  %Hash_cpp_380_72 = xor i64 %Hash_cpp_375_69, %Hash_cpp_380_71
  %Hash_cpp_380_73 = mul i64 %Hash_cpp_380_72, 2685821657736338717
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %PreaggregationLogic_cpp_19_ = getelementptr object umbra::Preaggregation %Pipeline_cpp_276_, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_20_ = and i64 %Hash_cpp_380_73, 1023
  %PreaggregationLogic_cpp_20_74 = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_19_, %PreaggregationLogic_cpp_20_
  %PreaggregationLogic_cpp_25_ = load object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_74, i32 0, i32 0
  %PreaggregationLogic_cpp_25_75 = cmpne i64 %PreaggregationLogic_cpp_25_, %Hash_cpp_380_73
  condbr %PreaggregationLogic_cpp_25_75 %then %else79

then:
  %PreaggregationLogic_cpp_29_ = call ptr _ZN5umbra14Preaggregation8addEntryEm (%Pipeline_cpp_276_, %Hash_cpp_380_73)
  store int32 %RelationMappedLogic_cpp_308_, %PreaggregationLogic_cpp_29_
  %GroupByTranslator_cpp_207_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 4
  store data128 %Numeric_cpp_698_, %GroupByTranslator_cpp_207_
  %MaterializationHelper_cpp_993_ = getelementptr int8 %GroupByTranslator_cpp_207_, i64 16
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_993_, %RelationMappedLogic_cpp_324_)
  %MaterializationHelper_cpp_993_76 = getelementptr int8 %GroupByTranslator_cpp_207_, i64 32
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_993_76, %RelationMappedLogic_cpp_324_63)
  %MaterializationHelper_cpp_993_77 = getelementptr int8 %GroupByTranslator_cpp_207_, i64 48
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_993_77, %RelationMappedLogic_cpp_324_54)
  %MaterializationHelper_cpp_991_ = getelementptr int8 %GroupByTranslator_cpp_207_, i64 64
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_991_, %MaterializationHelper_cpp_230_27)
  %MaterializationHelper_cpp_993_78 = getelementptr int8 %GroupByTranslator_cpp_207_, i64 80
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_993_78, %RelationMappedLogic_cpp_324_45)
  %MaterializationHelper_cpp_983_ = getelementptr int8 %GroupByTranslator_cpp_207_, i64 96
  store int64 %RelationMappedLogic_cpp_309_, %MaterializationHelper_cpp_983_
  br %cont83

else79:
  %PreaggregationLogic_cpp_36_ = getelementptr object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_74, i32 1
  %MaterializationHelper_cpp_876_ = load int32 %PreaggregationLogic_cpp_36_
  %Integer_cpp_83_80 = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_876_
  %ConsumerContext_cpp_417_81 = not bool %Integer_cpp_83_80
  condbr %ConsumerContext_cpp_417_81 %then %else82

else82:
  %GroupByTranslator_cpp_217_ = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 4
  %MaterializationHelper_cpp_977_ = load data128 %GroupByTranslator_cpp_217_
  %BigNumeric_cpp_688_ = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_, %Numeric_cpp_698_)
  store data128 %BigNumeric_cpp_688_, %GroupByTranslator_cpp_217_
  br %cont83

cont83:
  br %loopDoneloopHashChain22

continueProbe:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_12, %hashEntry23)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain21 %loopDoneloopHashChain22

loopDoneloopHashChain22:
  br %checkCancellation

checkCancellation:
  %ChainingHashTableLogic_cpp_129_ = atomicload int8 %CompilationContext_cpp_267_
  %ChainingHashTableLogic_cpp_129_84 = cmpne i8 %ChainingHashTableLogic_cpp_129_, 0
  condbr %ChainingHashTableLogic_cpp_129_84 %cancellation %continueProbe85

continueProbe85:
  %ChainingHashTableLogic_cpp_136_86 = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_87 = isnotnull ptr %ChainingHashTableLogic_cpp_136_86
  condbr %ChainingHashTableLogic_cpp_137_87 %looploopHashChain %loopDoneloopHashChain

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
  return 26

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable

cancellation:
  call void _ZN5umbra16RuntimeFunctions20checkForCancellationEv ()
  unreachable
}

declare void @_ZN5umbra16RuntimeFunctions13throwOverflowEv()

declare data128 @_ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_(data128 %19500, data128 %19514)

declare int8* @_ZN5umbra14Preaggregation8addEntryEm(object umbra::Preaggregation* %20065, int64 %20079)

declare void @_ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_(data128* %20566, data128 %20580)

declare data128 @_ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_(data128 %21096, data128 %21110)

declare void @_ZN5umbra16RuntimeFunctions20checkForCancellationEv()

define int32 @_10_planStep18(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 656
  call void _ZN5umbra17AggregationTarget14exchangeTablesEPvm (%CompilationContext_cpp_214_, %state, i64 32)
  %CompilationContext_cpp_220_0 = getelementptr int8 %state, i64 56
  call void _ZN5umbra17AggregationTarget17setupAggregateJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 29)
  return 28
}

declare void @_ZN5umbra17AggregationTarget14exchangeTablesEPvm(object umbra::AggregationTarget* %22084, int8* %22098, int64 %22112)

declare void @_ZN5umbra17AggregationTarget17setupAggregateJobEPv(object umbra::AggregationTarget* %22203, int8* %22217)

define int32 @_10_groupby_join_join_tablescan_customer_extra(int8* %trampoline, int8* %state, int8* %localState) [
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
  %MaterializationHelper_cpp_876_ = load int32 %GroupByTranslator_cpp_112_
  %GroupByTranslator_cpp_113_ = getelementptr object umbra::Preaggregation::EntryHeader %chainEntry, i32 1
  %MaterializationHelper_cpp_876_2 = load int32 %GroupByTranslator_cpp_113_
  %Integer_cpp_83_ = cmpeq i32 %MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_876_2
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %noMatch %else

else:
  %GroupByTranslator_cpp_121_ = getelementptr int8 %entry, i64 20
  %GroupByTranslator_cpp_121_3 = getelementptr int8 %chainEntry, i64 20
  %MaterializationHelper_cpp_977_ = load data128 %GroupByTranslator_cpp_121_3
  %MaterializationHelper_cpp_977_4 = load data128 %GroupByTranslator_cpp_121_
  %BigNumeric_cpp_688_ = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_, %MaterializationHelper_cpp_977_4)
  store data128 %BigNumeric_cpp_688_, %GroupByTranslator_cpp_121_3
  br %continue

noMatch:
  %PreaggregationLogic_cpp_82_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 1
  %PreaggregationLogic_cpp_83_ = isnotnull ptr %PreaggregationLogic_cpp_82_
  condbr %PreaggregationLogic_cpp_83_ %loopChain %loopDoneChain

loopDoneChain:
  store object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_69_, %entry, i32 0, i32 1
  store object umbra::Preaggregation::EntryHeader* %entry, %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_90_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 2
  %PreaggregationLogic_cpp_90_5 = add i64 %PreaggregationLogic_cpp_90_, 1
  store object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_90_5, %PreaggregationLogic_cpp_47_, i32 0, i32 2
  br %continue

continue:
  %PreaggregationLogic_cpp_110_ = getelementptr int8 %entry, i64 124
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
  return 29
}

declare void @_ZN5umbra17AggregationTarget8Fragment9checkSizeEv(object umbra::AggregationTarget::Fragment* %22563)

define int32 @_10_planStep19(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 656
  call void _ZN5umbra17AggregationTarget12setupScanJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 192, i32 30, i32 31, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 33)
  return 34
}

declare void @_ZN5umbra17AggregationTarget12setupScanJobEPv(object umbra::AggregationTarget* %24641, int8* %24655)

define int32 @_10_planStep20(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%Pipeline_cpp_276_, %state, global %1348)
  return 0
}

define int32 @_10_planStep21(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra12SortOperator7destroyEPS0_(object umbra::SortOperator* %25011)

define int32 @_10_planStep22(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_sort_groupby(int8* %trampoline, int8* %state, int8* %localState) [
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
  %MaterializationHelper_cpp_876_ = load int32 %PreaggregationLogic_cpp_140_
  %GroupByTranslator_cpp_248_ = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 4
  %MaterializationHelper_cpp_977_ = load data128 %GroupByTranslator_cpp_248_
  %MaterializationHelper_cpp_876_1 = getelementptr int8 %GroupByTranslator_cpp_248_, i64 16
  %MaterializationHelper_cpp_876_2 = load data128 %MaterializationHelper_cpp_876_1
  %MaterializationHelper_cpp_876_3 = getelementptr int8 %GroupByTranslator_cpp_248_, i64 32
  %MaterializationHelper_cpp_876_4 = load data128 %MaterializationHelper_cpp_876_3
  %MaterializationHelper_cpp_876_5 = getelementptr int8 %GroupByTranslator_cpp_248_, i64 48
  %MaterializationHelper_cpp_876_6 = load data128 %MaterializationHelper_cpp_876_5
  %MaterializationHelper_cpp_876_7 = getelementptr int8 %GroupByTranslator_cpp_248_, i64 64
  %MaterializationHelper_cpp_876_8 = load data128 %MaterializationHelper_cpp_876_7
  %MaterializationHelper_cpp_876_9 = getelementptr int8 %GroupByTranslator_cpp_248_, i64 80
  %MaterializationHelper_cpp_876_10 = load data128 %MaterializationHelper_cpp_876_9
  %MaterializationHelper_cpp_876_11 = getelementptr int8 %GroupByTranslator_cpp_248_, i64 96
  %MaterializationHelper_cpp_876_12 = load int64 %MaterializationHelper_cpp_876_11
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %SortTranslator_cpp_301_ = call ptr _ZN5umbra12SortOperator10storeTupleEm (%Pipeline_cpp_276_, i64 108)
  store data128 %MaterializationHelper_cpp_977_, %SortTranslator_cpp_301_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %SortTranslator_cpp_301_, i64 16
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %MaterializationHelper_cpp_876_2)
  %MaterializationHelper_cpp_150_ = getelementptr int8 %MaterializationHelper_cpp_161_, i64 16
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_, %MaterializationHelper_cpp_876_10)
  %MaterializationHelper_cpp_150_13 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 32
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_13, %MaterializationHelper_cpp_876_8)
  %MaterializationHelper_cpp_150_14 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 48
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_14, %MaterializationHelper_cpp_876_6)
  %MaterializationHelper_cpp_150_15 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 64
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_15, %MaterializationHelper_cpp_876_4)
  %MaterializationHelper_cpp_150_16 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 80
  store int64 %MaterializationHelper_cpp_876_12, %MaterializationHelper_cpp_150_16
  %MaterializationHelper_cpp_150_17 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 88
  store int32 %MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_150_17
  %SortTranslator_cpp_303_ = call bool _ZN5umbra12SortOperator15finishTopKTupleEv (%Pipeline_cpp_276_)
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
  return 33
}

declare int8* @_ZN5umbra12SortOperator10storeTupleEm(object umbra::SortOperator* %26472, int64 %26486)

declare bool @_ZN5umbra12SortOperator15finishTopKTupleEv(object umbra::SortOperator* %27192)

define int32 @_10_planStep23(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 36)
  return 35
}

define int32 @_10_sort_groupby_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  call void _ZN5umbra12SortOperator9sortLocalEv (%Pipeline_cpp_470_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25248
  call void _ZN5umbra12SortOperator17donateTupleMemoryERS0_ (%Pipeline_cpp_470_, %CompilationContext_cpp_214_)
  br %stepDone

stepDone:
  return 36
}

declare void @_ZN5umbra12SortOperator9sortLocalEv(object umbra::SortOperator* %27792)

declare void @_ZN5umbra12SortOperator17donateTupleMemoryERS0_(object umbra::SortOperator* %27874, object umbra::SortOperator* %27888)

define int32 @_10_planStep24(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25248
  call void _ZN5umbra12SortOperator17prepareSortGlobalEPvPKv (%CompilationContext_cpp_214_, %state, global %28032)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 25248
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_ (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 38)
  return 37
}

declare void @_ZN5umbra12SortOperator17prepareSortGlobalEPvPKv(object umbra::SortOperator* %28116, int8* %28130, int8* %28144)

declare void @_ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_(int8* %28285, object umbra::SortOperator* %28299)

define int32 @_10_sort_groupby_extra25(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_252_ = load int32 %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25248
  call void _ZN5umbra12SortOperator10sortGlobalEPvPKvj (%CompilationContext_cpp_214_, %state, global %28032, %SortTranslator_cpp_252_)
  br %stepDone

stepDone:
  return 38
}

declare void @_ZN5umbra12SortOperator10sortGlobalEPvPKvj(object umbra::SortOperator* %28549, int8* %28563, int8* %28577, int32 %28591)

define int32 @_10_planStep26(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25248
  call void _ZN5umbra12SortOperator3Job4initEPvRS0_b (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, bool true)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 32, i32 39, i32 40, i32 41)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 42)
  return 43
}

declare void @_ZN5umbra12SortOperator3Job4initEPvRS0_b(int8* %28850, object umbra::SortOperator* %28864, bool %28878)

define int32 @_10_planStep27(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_planStep28(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_planStep29(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_map_sort(int8* %trampoline, int8* %state, int8* %localState) [
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
  %MaterializationHelper_cpp_233_ = getelementptr int8 %CodeGen_hpp_1103_, i64 16
  %MaterializationHelper_cpp_230_1 = load data128 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %MaterializationHelper_cpp_233_, i64 16
  %MaterializationHelper_cpp_230_2 = load data128 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_229_3 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 32
  %MaterializationHelper_cpp_230_4 = load data128 %MaterializationHelper_cpp_229_3
  %MaterializationHelper_cpp_229_5 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 48
  %MaterializationHelper_cpp_230_6 = load data128 %MaterializationHelper_cpp_229_5
  %MaterializationHelper_cpp_229_7 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 64
  %MaterializationHelper_cpp_230_8 = load data128 %MaterializationHelper_cpp_229_7
  %MaterializationHelper_cpp_229_9 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 80
  %MaterializationHelper_cpp_230_10 = load int64 %MaterializationHelper_cpp_229_9
  %MaterializationHelper_cpp_229_11 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 88
  %MaterializationHelper_cpp_230_12 = load int32 %MaterializationHelper_cpp_229_11
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
  call void _ZN5umbra14IntegerRuntime6outputERNS_12OutputTargetENS_4TypeEi (ptr 0x5569cf77b7c0, i64 288230376151711744, %MaterializationHelper_cpp_230_12)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %30776, i32 1)
  call void _ZN5umbra11TextRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x5569cf77b7c0, i64 792633534836637696, %MaterializationHelper_cpp_230_1)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %30776, i32 1)
  call void _ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x5569cf77b7c0, i64 504403158684926976, %MaterializationHelper_cpp_230_)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %30776, i32 1)
  call void _ZN5umbra14NumericRuntime6outputERNS_12OutputTargetENS_4TypeEl (ptr 0x5569cf77b7c0, i64 432345564428894720, %MaterializationHelper_cpp_230_10)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %30776, i32 1)
  call void _ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x5569cf77b7c0, i64 720575940798709760, %MaterializationHelper_cpp_230_4)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %30776, i32 1)
  call void _ZN5umbra11TextRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x5569cf77b7c0, i64 792633535088295936, %MaterializationHelper_cpp_230_6)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %30776, i32 1)
  call void _ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x5569cf77b7c0, i64 720575940630937600, %MaterializationHelper_cpp_230_2)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %30776, i32 1)
  call void _ZN5umbra11TextRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x5569cf77b7c0, i64 792633536380141568, %MaterializationHelper_cpp_230_8)
  call void _ZN5umbra16RuntimeFunctions13printNlResultEv ()
  atomicstore int8 i8 0, %CompilationContext_cpp_214_
  call void _ZN5umbra16RuntimeFunctions15bumpResultValueEPv (%state)
  %SortTranslator_cpp_341_ = getelementptr int8* %tuple, i32 1
  %SortTranslator_cpp_342_ = cmpne ptr %SortTranslator_cpp_341_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_342_ %loopTuples %loopDoneTuples

loopDoneTuples:
  br %stepDone

stepDone:
  return 42
}

declare int8 @_ZN5umbra16RuntimeFunctions12lockSpinlockEPvh(int8* %30567, int8 %30581)

declare void @_ZN5umbra14IntegerRuntime6outputERNS_12OutputTargetENS_4TypeEi(object umbra::OutputTarget* %30708, int64 %30722, int32 %30736)

declare void @_ZN5umbra16RuntimeFunctions17printStringResultEPKcj(int8* %30798, int32 %30812)

declare void @_ZN5umbra11TextRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %30862, int64 %30876, data128 %30890)

declare void @_ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %30966, int64 %30980, data128 %30994)

declare void @_ZN5umbra14NumericRuntime6outputERNS_12OutputTargetENS_4TypeEl(object umbra::OutputTarget* %31070, int64 %31084, int64 %31098)

declare void @_ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %31174, int64 %31188, data128 %31202)

declare void @_ZN5umbra16RuntimeFunctions13printNlResultEv()

declare void @_ZN5umbra16RuntimeFunctions15bumpResultValueEPv(int8* %31464)

define int32 @_10_planStep30(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  return 0
}

define int32 @_10_cleanup(int8* %trampoline, int8* %state, int8* %localState) [
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
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_3)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 560
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_4)
  %CompilationContext_cpp_214_5 = getelementptr int8 %state, i64 608
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_5)
  %CompilationContext_cpp_214_6 = getelementptr int8 %state, i64 656
  call void _ZN5umbra17AggregationTarget7destroyEPS0_ (%CompilationContext_cpp_214_6)
  %CompilationContext_cpp_214_7 = getelementptr int8 %state, i64 25248
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%CompilationContext_cpp_214_7)
  return 0
}

declare void @_ZN5umbra14RelationMapped6Reader7destroyEPv(int8* %31886)

declare void @_ZN5umbra17ChainingHashTable7destroyEPv(int8* %32107)

declare void @_ZN5umbra17AggregationTarget7destroyEPS0_(object umbra::AggregationTarget* %32397)
`;
