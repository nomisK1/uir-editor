export const tpch2 = `const %3627[29] ="\\001\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000d\\000\\000\\000\\000\\000\\000\\000\\000"

const %3984[72] ="\\001\\000\\000\\000\\002\\000\\000\\000\\000\\000\\000\\031\\000\\000\\000\\012\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\0-0U\\000\\000\\006\\000\\000\\000EUROPE\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %4094[8] ="\\000\\000\\000\\000\\001\\000\\000\\000"

const %8390[0] =""

const %8429[12] ="\\000\\000\\000\\000\\001\\000\\000\\000\\002\\000\\000\\000"

const %12830[28] ="\\000\\000\\000\\000\\001\\000\\000\\000\\002\\000\\000\\000\\003\\000\\000\\000\\004\\000\\000\\000\\005\\000\\000\\000\\006\\000\\000\\000"

const %19207[72] ="\\005\\000\\000\\000\\002\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\004\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\0-0U\\000\\000\\017\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %19318[16] ="\\000\\000\\000\\000\\002\\000\\000\\000\\004\\000\\000\\000\\005\\000\\000\\000"

const %21673[21] ="\\000\\000\\000\\000\\000\\000\\000\\000\\005\\000\\000\\000\\005\\000\\000\\000BRASS"

const %27127[8] ="\\000\\000\\000\\000\\002\\000\\000\\000"

const %30898[8] ="\\000\\000\\000\\000\\003\\000\\000\\000"

const %34659[12] ="\\000\\000\\000\\000\\001\\000\\000\\000\\003\\000\\000\\000"

const %50824[8] =" \\000\\000\\000\\000\\000\\000\\000"

const %53561[1] =" "

define int32 @_9_init(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_1, i32 0)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 368
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_2)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_3, i32 0)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 512
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_4)
  %CompilationContext_cpp_214_5 = getelementptr int8 %state, i64 608
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_5)
  %CompilationContext_cpp_214_6 = getelementptr int8 %state, i64 704
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_6)
  %CompilationContext_cpp_214_7 = getelementptr int8 %state, i64 800
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_7, i32 0)
  %CompilationContext_cpp_214_8 = getelementptr int8 %state, i64 848
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_8)
  %CompilationContext_cpp_214_9 = getelementptr int8 %state, i64 944
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_9, i32 0)
  %CompilationContext_cpp_214_10 = getelementptr int8 %state, i64 992
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_10)
  %CompilationContext_cpp_214_11 = getelementptr int8 %state, i64 1088
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_11, i32 0)
  %CompilationContext_cpp_214_12 = getelementptr int8 %state, i64 1136
  call void _ZN5umbra17AggregationTarget4initEPS0_m (%CompilationContext_cpp_214_12, i64 12)
  %CompilationContext_cpp_214_14 = getelementptr int8 %state, i64 25728
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_14, i32 0)
  %CompilationContext_cpp_214_15 = getelementptr int8 %state, i64 25776
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_15)
  %CompilationContext_cpp_214_16 = getelementptr int8 %state, i64 25872
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_16, i32 0)
  %CompilationContext_cpp_214_17 = getelementptr int8 %state, i64 25920
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_17, i32 0)
  %CompilationContext_cpp_214_18 = getelementptr int8 %state, i64 25968
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%CompilationContext_cpp_214_18, %state, global %3627)
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
  %Numeric_cpp_323_ = cmpslt i64 %MaterializationHelper_cpp_230_9, %MaterializationHelper_cpp_230_2
  %Numeric_cpp_323_13 = zext i32 %Numeric_cpp_323_
  %Numeric_cpp_323_14 = cmpslt i64 %MaterializationHelper_cpp_230_2, %MaterializationHelper_cpp_230_9
  %Numeric_cpp_323_15 = zext i32 %Numeric_cpp_323_14
  %Numeric_cpp_323_16 = sub i32 %Numeric_cpp_323_15, %Numeric_cpp_323_13
  %SortTranslator_cpp_72_ = cmpne i32 %Numeric_cpp_323_16, 0
  condbr %SortTranslator_cpp_72_ %then %cont

then:
  return %Numeric_cpp_323_16

cont:
  %Char_cpp_136_ = call i32 _ZN5umbra11CharRuntime7compareENS_9data128_tES1_ (%MaterializationHelper_cpp_230_, %MaterializationHelper_cpp_230_5)
  %SortTranslator_cpp_72_17 = cmpne i32 %Char_cpp_136_, 0
  condbr %SortTranslator_cpp_72_17 %then18 %cont19

then18:
  return %Char_cpp_136_

cont19:
  %Char_cpp_136_20 = call i32 _ZN5umbra11CharRuntime7compareENS_9data128_tES1_ (%MaterializationHelper_cpp_230_0, %MaterializationHelper_cpp_230_7)
  %Integer_cpp_93_ = cmpslt i32 %MaterializationHelper_cpp_230_4, %MaterializationHelper_cpp_230_11
  %Integer_cpp_93_21 = zext i32 %Integer_cpp_93_
  %Integer_cpp_93_22 = cmpslt i32 %MaterializationHelper_cpp_230_11, %MaterializationHelper_cpp_230_4
  %Integer_cpp_93_23 = zext i32 %Integer_cpp_93_22
  %Integer_cpp_93_24 = sub i32 %Integer_cpp_93_23, %Integer_cpp_93_21
  %SortTranslator_cpp_103_ = cmpeq i32 %Char_cpp_136_20, 0
  %SortTranslator_cpp_103_25 = SExt i32 %SortTranslator_cpp_103_
  %SortTranslator_cpp_103_26 = and i32 %Integer_cpp_93_24, %SortTranslator_cpp_103_25
  %SortTranslator_cpp_103_27 = or i32 %Char_cpp_136_20, %SortTranslator_cpp_103_26
  return %SortTranslator_cpp_103_27
}

declare int32 @_ZN5umbra11CharRuntime7compareENS_9data128_tES1_(data128 %1292, data128 %1306)

declare void @_ZN5umbra14RelationMapped6Reader4initEPv(int8* %1849)

declare void @_ZN5umbra17ChainingHashTable4initEPvj(int8* %2049, int32 %2063)

declare void @_ZN5umbra17AggregationTarget4initEPS0_m(object umbra::AggregationTarget* %3137, int64 %3151)

declare void @_ZN5umbra12SortOperator4initEPS0_PKvS3_(object umbra::SortOperator* %3762, int8* %3776, int8* %3790)

define int32 @_9_planStep(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 7, global %3984, i64 1, global %4094, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 2, i32 3, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 5)
  return 6
}

declare void @_ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj(int8* %4221, int8* %4235, int64 %4249, object umbra::Relation::RestrictionInfo* %4263, int64 %4277, int32* %4291, int32 %4305)

declare void @_ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj(int8* %4391, int32 %4405, int32 %4419, int32 %4433, int32 %4447)

define int32 @_9_planStep0(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector4initEPv(int8* %4605)

define int32 @_9_planStep1(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector7destroyEPv(int8* %4757)

define int32 @_9_planStep2(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

declare void @_ZN5umbra13ExecutionPlan17setupParallelStepEPvj(int8* %4889, int32 %4903)

define int32 @_9_join_tablescan_region(int8* %trampoline, int8* %state, int8* %localState) [
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
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_6 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_7 = add i64 %RelationMappedLogic_cpp_320_6, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_8 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_7, %RelationMappedLogic_cpp_320_6
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_8
  %Char_cpp_113_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, 5715724631927685126
  condbr %Char_cpp_114_ %then %cont11

then:
  %Char_cpp_115_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_115_9 = cmpeq i64 %Char_cpp_115_, 17744
  condbr %Char_cpp_115_9 %then10 %else

then10:
  br %cont

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_, d128 {5715724631927685126,17744})
  br %cont

cont:
  %6823 = phi bool [bool true, %then10 %Char_cpp_118_, %else]
  br %cont11

cont11:
  %6866 = phi bool [%6823, %cont bool false, %loopTuples]
  condbr %6866 %then12 %contScan

then12:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_13 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_14 = mul i64 %Hash_cpp_380_13, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_14, i64 4)
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

declare bool @_ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_(data128 %6749, data128 %6763)

declare int8* @_ZN5umbra17ChainingHashTable9Collector7collectEmm(object umbra::ChainingHashTable::Collector* %7239, int64 %7253, int64 %7267)

define int32 @_9_planStep3(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 8)
  return 7
}

declare void @_ZN5umbra17TableScanOperator3Job7destroyEPv(int8* %7728)

declare void @_ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj(object umbra::ChainingHashTable* %7810, int8* %7824, int32 %7838)

declare void @_ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj(int8* %7878, int32 %7892)

define int32 @_9_join_tablescan_region_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 8
}

declare void @_ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE(object umbra::ChainingHashTable* %8136, object umbra::ChainingHashTable::Collector* %8150)

define int32 @_9_planStep4(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 224
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 6, global %8390, i64 0, global %8429, i32 3)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 9, i32 10, i32 11)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 12)
  return 13
}

declare void @_ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv(int8* %8276)

declare void @_ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv(int8* %8308)

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

define int32 @_9_join_join_tablescan_nation(int8* %trampoline, int8* %state, int8* %localState) [
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
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1310720
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
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
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_8 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %RelationMappedLogic_cpp_303_9 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_9, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_10 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_11 = add i64 %RelationMappedLogic_cpp_320_10, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_12 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_11, %RelationMappedLogic_cpp_320_10
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_12
  %Hash_cpp_265_13 = zext i64 %RelationMappedLogic_cpp_308_8
  %Hash_cpp_375_14 = crc32 i64 5961697176435608501, %Hash_cpp_265_13
  %Hash_cpp_376_15 = crc32 i64 2231409791114444147, %Hash_cpp_265_13
  %Hash_cpp_380_16 = rotr i64 %Hash_cpp_376_15, 32
  %Hash_cpp_380_17 = xor i64 %Hash_cpp_375_14, %Hash_cpp_380_16
  %Hash_cpp_380_18 = mul i64 %Hash_cpp_380_17, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_18, i64 20)
  store int32 %RelationMappedLogic_cpp_308_8, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %RelationMappedLogic_cpp_324_)
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
  return 12
}

declare int8* @_ZN5umbra17ChainingHashTable6lookupEm(object umbra::ChainingHashTable* %10483, int64 %10497)

declare void @_ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_(data128* %11736, data128 %11750)

declare int8* @_ZN5umbra17ChainingHashTable10lookupNextEPv(object umbra::ChainingHashTable* %11851, int8* %11865)

define int32 @_9_planStep8(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 15)
  return 14
}

define int32 @_9_join_join_tablescan_nation_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 464
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
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 368
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 1, global %8390, i64 0, global %12830, i32 7)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 16, i32 17, i32 18)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 19)
  return 20
}

define int32 @_9_planStep10(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep11(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep12(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_join_tablescan_supplier(int8* %trampoline, int8* %state, int8* %localState) [
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
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2359296
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 464
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
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_230_8 = load data128 %MaterializationHelper_cpp_233_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_10 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %RelationMappedLogic_cpp_303_11 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2621440
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_11, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_12 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_13 = add i64 %RelationMappedLogic_cpp_320_12, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_14 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_13, %RelationMappedLogic_cpp_320_12
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_14
  %RelationMappedLogic_cpp_303_15 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3670016
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_15, %localTid
  %RelationMappedLogic_cpp_303_16 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 4194304
  %RelationMappedLogic_cpp_319_17 = getelementptr data128 %RelationMappedLogic_cpp_303_16, %localTid
  %RelationMappedLogic_cpp_320_18 = load int64 %RelationMappedLogic_cpp_319_17
  %RelationMappedLogic_cpp_320_19 = load int64 %RelationMappedLogic_cpp_319_17, i32 1
  %RelationMappedLogic_cpp_321_20 = trunc i32 %RelationMappedLogic_cpp_320_18
  %RelationMappedLogic_cpp_322_21 = cmpult i32 12, %RelationMappedLogic_cpp_321_20
  %RelationMappedLogic_cpp_322_22 = add i64 %RelationMappedLogic_cpp_320_19, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_23 = select i64 %RelationMappedLogic_cpp_322_21, %RelationMappedLogic_cpp_322_22, %RelationMappedLogic_cpp_320_19
  %RelationMappedLogic_cpp_324_24 = builddata128 d128 %RelationMappedLogic_cpp_320_18 %RelationMappedLogic_cpp_322_23
  %RelationMappedLogic_cpp_303_25 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_319_26 = getelementptr data128 %RelationMappedLogic_cpp_303_25, %localTid
  %RelationMappedLogic_cpp_320_27 = load int64 %RelationMappedLogic_cpp_319_26
  %RelationMappedLogic_cpp_320_28 = load int64 %RelationMappedLogic_cpp_319_26, i32 1
  %RelationMappedLogic_cpp_321_29 = trunc i32 %RelationMappedLogic_cpp_320_27
  %RelationMappedLogic_cpp_322_30 = cmpult i32 12, %RelationMappedLogic_cpp_321_29
  %RelationMappedLogic_cpp_322_31 = add i64 %RelationMappedLogic_cpp_320_28, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_32 = select i64 %RelationMappedLogic_cpp_322_30, %RelationMappedLogic_cpp_322_31, %RelationMappedLogic_cpp_320_28
  %RelationMappedLogic_cpp_324_33 = builddata128 d128 %RelationMappedLogic_cpp_320_27 %RelationMappedLogic_cpp_322_32
  %RelationMappedLogic_cpp_303_34 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1310720
  %RelationMappedLogic_cpp_319_35 = getelementptr data128 %RelationMappedLogic_cpp_303_34, %localTid
  %RelationMappedLogic_cpp_320_36 = load int64 %RelationMappedLogic_cpp_319_35
  %RelationMappedLogic_cpp_320_37 = load int64 %RelationMappedLogic_cpp_319_35, i32 1
  %RelationMappedLogic_cpp_321_38 = trunc i32 %RelationMappedLogic_cpp_320_36
  %RelationMappedLogic_cpp_322_39 = cmpult i32 12, %RelationMappedLogic_cpp_321_38
  %RelationMappedLogic_cpp_322_40 = add i64 %RelationMappedLogic_cpp_320_37, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_41 = select i64 %RelationMappedLogic_cpp_322_39, %RelationMappedLogic_cpp_322_40, %RelationMappedLogic_cpp_320_37
  %RelationMappedLogic_cpp_324_42 = builddata128 d128 %RelationMappedLogic_cpp_320_36 %RelationMappedLogic_cpp_322_41
  %Hash_cpp_265_43 = zext i64 %RelationMappedLogic_cpp_308_10
  %Hash_cpp_375_44 = crc32 i64 5961697176435608501, %Hash_cpp_265_43
  %Hash_cpp_376_45 = crc32 i64 2231409791114444147, %Hash_cpp_265_43
  %Hash_cpp_380_46 = rotr i64 %Hash_cpp_376_45, 32
  %Hash_cpp_380_47 = xor i64 %Hash_cpp_375_44, %Hash_cpp_380_46
  %Hash_cpp_380_48 = mul i64 %Hash_cpp_380_47, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_48, i64 92)
  store int32 %RelationMappedLogic_cpp_308_10, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %RelationMappedLogic_cpp_324_)
  %MaterializationHelper_cpp_150_ = getelementptr int8 %MaterializationHelper_cpp_161_, i64 16
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_, %RelationMappedLogic_cpp_324_24)
  %MaterializationHelper_cpp_150_49 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 32
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_49, %RelationMappedLogic_cpp_324_33)
  %MaterializationHelper_cpp_150_50 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 48
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_50, %RelationMappedLogic_cpp_324_42)
  %MaterializationHelper_cpp_150_51 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 64
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_51, %MaterializationHelper_cpp_230_8)
  %MaterializationHelper_cpp_150_52 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 80
  store int64 %RelationMappedLogic_cpp_309_, %MaterializationHelper_cpp_150_52
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

declare void @_ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_(data128* %18044, data128 %18058)

define int32 @_9_planStep13(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25920
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 22)
  return 21
}

define int32 @_9_join_join_tablescan_supplier_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25920
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 22
}

define int32 @_9_planStep14(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 512
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 0, global %19207, i64 1, global %19318, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 23, i32 24, i32 25)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 26)
  return 27
}

define int32 @_9_planStep15(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep16(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep17(int8* %trampoline, int8* %state, int8* %localState) [
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
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 4456448
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, 15
  condbr %Integer_cpp_83_ %then %contScan

then:
  %RelationMappedLogic_cpp_303_6 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3407872
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_6, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_7 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_8 = add i64 %RelationMappedLogic_cpp_320_7, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_9 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_8, %RelationMappedLogic_cpp_320_7
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_9
  %Text_cpp_355_ = call bool _ZN5umbra11TextRuntime11likeProgramENS_9data128_tEPKc (%RelationMappedLogic_cpp_324_, global %21673)
  condbr %Text_cpp_355_ %then10 %contScan

then10:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_11 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %RelationMappedLogic_cpp_303_12 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1310720
  %RelationMappedLogic_cpp_319_13 = getelementptr data128 %RelationMappedLogic_cpp_303_12, %localTid
  %RelationMappedLogic_cpp_320_14 = load int64 %RelationMappedLogic_cpp_319_13
  %RelationMappedLogic_cpp_320_15 = load int64 %RelationMappedLogic_cpp_319_13, i32 1
  %RelationMappedLogic_cpp_321_16 = trunc i32 %RelationMappedLogic_cpp_320_14
  %RelationMappedLogic_cpp_322_17 = cmpult i32 12, %RelationMappedLogic_cpp_321_16
  %RelationMappedLogic_cpp_322_18 = add i64 %RelationMappedLogic_cpp_320_15, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_19 = select i64 %RelationMappedLogic_cpp_322_17, %RelationMappedLogic_cpp_322_18, %RelationMappedLogic_cpp_320_15
  %RelationMappedLogic_cpp_324_20 = builddata128 d128 %RelationMappedLogic_cpp_320_14 %RelationMappedLogic_cpp_322_19
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_11
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_21 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_22 = mul i64 %Hash_cpp_380_21, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_22, i64 20)
  store int32 %RelationMappedLogic_cpp_308_11, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  call void _ZN5umbra11TextRuntime11storeOwningEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %RelationMappedLogic_cpp_324_20)
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
}

declare bool @_ZN5umbra11TextRuntime11likeProgramENS_9data128_tEPKc(data128 %21716, int8* %21730)

define int32 @_9_planStep18(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25728
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 29)
  return 28
}

define int32 @_9_join_tablescan_part_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25728
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 29
}

define int32 @_9_planStep19(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 608
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 7, global %3984, i64 1, global %4094, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 30, i32 31, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 33)
  return 34
}

define int32 @_9_planStep20(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep21(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep22(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_tablescan_region23(int8* %trampoline, int8* %state, int8* %localState) [
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
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_6 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_7 = add i64 %RelationMappedLogic_cpp_320_6, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_8 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_7, %RelationMappedLogic_cpp_320_6
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_8
  %Char_cpp_113_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, 5715724631927685126
  condbr %Char_cpp_114_ %then %cont11

then:
  %Char_cpp_115_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_115_9 = cmpeq i64 %Char_cpp_115_, 17744
  condbr %Char_cpp_115_9 %then10 %else

then10:
  br %cont

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_, d128 {5715724631927685126,17744})
  br %cont

cont:
  %25819 = phi bool [bool true, %then10 %Char_cpp_118_, %else]
  br %cont11

cont11:
  %25855 = phi bool [%25819, %cont bool false, %loopTuples]
  condbr %25855 %then12 %contScan

then12:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_13 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_14 = mul i64 %Hash_cpp_380_13, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_14, i64 4)
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
  return 33
}

define int32 @_9_planStep24(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 800
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 36)
  return 35
}

define int32 @_9_join_tablescan_region_extra25(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 800
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 36
}

define int32 @_9_planStep26(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 704
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 6, global %8390, i64 0, global %27127, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 37, i32 38, i32 39)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 40)
  return 41
}

define int32 @_9_planStep27(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep28(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep29(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_join_tablescan_nation30(int8* %trampoline, int8* %state, int8* %localState) [
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
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1310720
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 800
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
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_8 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_9 = zext i64 %RelationMappedLogic_cpp_308_8
  %Hash_cpp_375_10 = crc32 i64 5961697176435608501, %Hash_cpp_265_9
  %Hash_cpp_376_11 = crc32 i64 2231409791114444147, %Hash_cpp_265_9
  %Hash_cpp_380_12 = rotr i64 %Hash_cpp_376_11, 32
  %Hash_cpp_380_13 = xor i64 %Hash_cpp_375_10, %Hash_cpp_380_12
  %Hash_cpp_380_14 = mul i64 %Hash_cpp_380_13, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_14, i64 4)
  store int32 %RelationMappedLogic_cpp_308_8, %ChainingHashTableLogic_cpp_78_
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
  return 40
}

define int32 @_9_planStep31(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 944
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 43)
  return 42
}

define int32 @_9_join_join_tablescan_nation_extra32(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 944
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 43
}

define int32 @_9_planStep33(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 848
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 1, global %8390, i64 0, global %30898, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 44, i32 45, i32 46)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 47)
  return 48
}

define int32 @_9_planStep34(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep35(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep36(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_join_tablescan_supplier37(int8* %trampoline, int8* %state, int8* %localState) [
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
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2359296
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 944
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
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_8 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_9 = zext i64 %RelationMappedLogic_cpp_308_8
  %Hash_cpp_375_10 = crc32 i64 5961697176435608501, %Hash_cpp_265_9
  %Hash_cpp_376_11 = crc32 i64 2231409791114444147, %Hash_cpp_265_9
  %Hash_cpp_380_12 = rotr i64 %Hash_cpp_376_11, 32
  %Hash_cpp_380_13 = xor i64 %Hash_cpp_375_10, %Hash_cpp_380_12
  %Hash_cpp_380_14 = mul i64 %Hash_cpp_380_13, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_14, i64 4)
  store int32 %RelationMappedLogic_cpp_308_8, %ChainingHashTableLogic_cpp_78_
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
  return 47
}

define int32 @_9_planStep38(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 1088
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 50)
  return 49
}

define int32 @_9_join_join_tablescan_supplier_extra39(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 1088
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 50
}

define int32 @_9_planStep40(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 992
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 2, global %8390, i64 0, global %34659, i32 3)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 28736, i32 51, i32 52, i32 53)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 54)
  return 55
}

define int32 @_9_planStep41(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation4initEPS0_m (%Pipeline_cpp_276_, i64 12)
  return 0
}

declare void @_ZN5umbra14Preaggregation4initEPS0_m(object umbra::Preaggregation* %34993, int64 %35007)

define int32 @_9_planStep42(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra14Preaggregation7destroyEPS0_(object umbra::Preaggregation* %35163)

define int32 @_9_planStep43(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_groupby_join_tablescan_partsupp(int8* %trampoline, int8* %state, int8* %localState) [
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
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 1088
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
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %RelationMappedLogic_cpp_303_8 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 786432
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_8, %localTid
  %RelationMappedLogic_cpp_308_9 = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_10 = zext i64 %RelationMappedLogic_cpp_308_9
  %Hash_cpp_375_11 = crc32 i64 5961697176435608501, %Hash_cpp_265_10
  %Hash_cpp_376_12 = crc32 i64 2231409791114444147, %Hash_cpp_265_10
  %Hash_cpp_380_13 = rotr i64 %Hash_cpp_376_12, 32
  %Hash_cpp_380_14 = xor i64 %Hash_cpp_375_11, %Hash_cpp_380_13
  %Hash_cpp_380_15 = mul i64 %Hash_cpp_380_14, 2685821657736338717
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %PreaggregationLogic_cpp_19_ = getelementptr object umbra::Preaggregation %Pipeline_cpp_276_, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_20_ = and i64 %Hash_cpp_380_15, 1023
  %PreaggregationLogic_cpp_20_16 = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_19_, %PreaggregationLogic_cpp_20_
  %PreaggregationLogic_cpp_25_ = load object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_16, i32 0, i32 0
  %PreaggregationLogic_cpp_25_17 = cmpne i64 %PreaggregationLogic_cpp_25_, %Hash_cpp_380_15
  condbr %PreaggregationLogic_cpp_25_17 %then %else18

then:
  %PreaggregationLogic_cpp_29_ = call ptr _ZN5umbra14Preaggregation8addEntryEm (%Pipeline_cpp_276_, %Hash_cpp_380_15)
  store int32 %RelationMappedLogic_cpp_308_9, %PreaggregationLogic_cpp_29_
  %GroupByTranslator_cpp_207_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 4
  store int64 %RelationMappedLogic_cpp_309_, %GroupByTranslator_cpp_207_
  br %cont23

else18:
  %PreaggregationLogic_cpp_36_ = getelementptr object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_16, i32 1
  %MaterializationHelper_cpp_876_ = load int32 %PreaggregationLogic_cpp_36_
  %Integer_cpp_83_19 = cmpeq i32 %RelationMappedLogic_cpp_308_9, %MaterializationHelper_cpp_876_
  %ConsumerContext_cpp_417_20 = not bool %Integer_cpp_83_19
  condbr %ConsumerContext_cpp_417_20 %then %else21

else21:
  %GroupByTranslator_cpp_217_ = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 4
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_217_
  %Numeric_cpp_277_ = cmpslt i64 %RelationMappedLogic_cpp_309_, %MaterializationHelper_cpp_977_
  condbr %Numeric_cpp_277_ %then22 %cont

then22:
  store int64 %RelationMappedLogic_cpp_309_, %GroupByTranslator_cpp_217_
  br %cont

cont:
  br %cont23

cont23:
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
  return 54
}

declare int8* @_ZN5umbra14Preaggregation8addEntryEm(object umbra::Preaggregation* %37821, int64 %37835)

define int32 @_9_planStep44(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 1136
  call void _ZN5umbra17AggregationTarget14exchangeTablesEPvm (%CompilationContext_cpp_214_, %state, i64 32)
  %CompilationContext_cpp_220_0 = getelementptr int8 %state, i64 56
  call void _ZN5umbra17AggregationTarget17setupAggregateJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 57)
  return 56
}

declare void @_ZN5umbra17AggregationTarget14exchangeTablesEPvm(object umbra::AggregationTarget* %38884, int8* %38898, int64 %38912)

declare void @_ZN5umbra17AggregationTarget17setupAggregateJobEPv(object umbra::AggregationTarget* %39003, int8* %39017)

define int32 @_9_groupby_join_tablescan_partsupp_extra(int8* %trampoline, int8* %state, int8* %localState) [
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
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_121_3
  %MaterializationHelper_cpp_977_4 = load int64 %GroupByTranslator_cpp_121_
  %Numeric_cpp_277_ = cmpslt i64 %MaterializationHelper_cpp_977_4, %MaterializationHelper_cpp_977_
  condbr %Numeric_cpp_277_ %then5 %cont

then5:
  store int64 %MaterializationHelper_cpp_977_4, %GroupByTranslator_cpp_121_3
  br %cont

cont:
  br %continue

noMatch:
  %PreaggregationLogic_cpp_82_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 1
  %PreaggregationLogic_cpp_83_ = isnotnull ptr %PreaggregationLogic_cpp_82_
  condbr %PreaggregationLogic_cpp_83_ %loopChain %loopDoneChain

loopDoneChain:
  store object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_69_, %entry, i32 0, i32 1
  store object umbra::Preaggregation::EntryHeader* %entry, %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_90_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 2
  %PreaggregationLogic_cpp_90_6 = add i64 %PreaggregationLogic_cpp_90_, 1
  store object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_90_6, %PreaggregationLogic_cpp_47_, i32 0, i32 2
  br %continue

continue:
  %PreaggregationLogic_cpp_110_ = getelementptr int8 %entry, i64 28
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
  return 57
}

declare void @_ZN5umbra17AggregationTarget8Fragment9checkSizeEv(object umbra::AggregationTarget::Fragment* %39363)

define int32 @_9_planStep45(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 1136
  call void _ZN5umbra17AggregationTarget12setupScanJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 58, i32 59, i32 60)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 61)
  return 62
}

declare void @_ZN5umbra17AggregationTarget12setupScanJobEPv(object umbra::AggregationTarget* %41458, int8* %41472)

define int32 @_9_planStep46(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep47(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep48(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_join_groupby(int8* %trampoline, int8* %state, int8* %localState) [
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
  %iter = phi ptr [%PreaggregationLogic_cpp_135_, %loopSlots %PreaggregationLogic_cpp_142_, %loopDoneloopHashChain]
  %PreaggregationLogic_cpp_140_ = getelementptr int8 %iter, i64 16
  %MaterializationHelper_cpp_876_ = load int32 %PreaggregationLogic_cpp_140_
  %GroupByTranslator_cpp_248_ = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 4
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_248_
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25728
  %Hash_cpp_265_ = zext i64 %MaterializationHelper_cpp_876_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_1 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_2 = mul i64 %Hash_cpp_380_1, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_2)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopChain %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_230_3 = load data128 %MaterializationHelper_cpp_233_
  %Integer_cpp_83_ = cmpeq i32 %MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %Hash_cpp_265_5 = zext i64 %MaterializationHelper_cpp_230_
  %Hash_cpp_375_6 = crc32 i64 5961697176435608501, %MaterializationHelper_cpp_977_
  %Hash_cpp_376_7 = crc32 i64 2231409791114444147, %MaterializationHelper_cpp_977_
  %Hash_cpp_375_8 = crc32 i64 %Hash_cpp_375_6, %Hash_cpp_265_5
  %Hash_cpp_376_9 = crc32 i64 %Hash_cpp_376_7, %Hash_cpp_265_5
  %Hash_cpp_380_10 = rotr i64 %Hash_cpp_376_9, 32
  %Hash_cpp_380_11 = xor i64 %Hash_cpp_375_8, %Hash_cpp_380_10
  %Hash_cpp_380_12 = mul i64 %Hash_cpp_380_11, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_12, i64 28)
  store int64 %MaterializationHelper_cpp_977_, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_150_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 8
  store int32 %MaterializationHelper_cpp_230_, %MaterializationHelper_cpp_150_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 12
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %MaterializationHelper_cpp_230_3)
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
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
  return 61
}

define int32 @_9_planStep49(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25872
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 64)
  return 63
}

define int32 @_9_join_join_groupby_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25872
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 64
}

define int32 @_9_planStep50(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25776
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 2, global %8390, i64 0, global %34659, i32 3)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 192, i32 65, i32 66, i32 67)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 68)
  return 69
}

define int32 @_9_planStep51(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator4initEPS0_PKvS3_ (%Pipeline_cpp_276_, %state, global %3627)
  return 0
}

define int32 @_9_planStep52(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra12SortOperator7destroyEPS0_(object umbra::SortOperator* %45268)

define int32 @_9_planStep53(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_sort_join_join_tablescan_partsupp(int8* %trampoline, int8* %state, int8* %localState) [
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
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 786432
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25872
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %RelationMappedLogic_cpp_309_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %RelationMappedLogic_cpp_309_
  %Hash_cpp_375_6 = crc32 i64 %Hash_cpp_375_, %Hash_cpp_265_
  %Hash_cpp_376_7 = crc32 i64 %Hash_cpp_376_, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_7, 32
  %Hash_cpp_380_8 = xor i64 %Hash_cpp_375_6, %Hash_cpp_380_
  %Hash_cpp_380_9 = mul i64 %Hash_cpp_380_8, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_9)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_52, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int64 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 8
  %MaterializationHelper_cpp_230_10 = load int32 %MaterializationHelper_cpp_229_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 12
  %MaterializationHelper_cpp_230_11 = load data128 %MaterializationHelper_cpp_233_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_10
  %Numeric_cpp_276_ = cmpeq i64 %RelationMappedLogic_cpp_309_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_407_ = and bool %Integer_cpp_83_, %Numeric_cpp_276_
  %ConsumerContext_cpp_417_ = not bool %ConsumerContext_cpp_407_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %RelationMappedLogic_cpp_303_13 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_308_14 = load int32 %RelationMappedLogic_cpp_303_13, %localTid
  %CompilationContext_cpp_214_15 = getelementptr int8 %state, i64 25920
  %Hash_cpp_265_16 = zext i64 %RelationMappedLogic_cpp_308_14
  %Hash_cpp_375_17 = crc32 i64 5961697176435608501, %Hash_cpp_265_16
  %Hash_cpp_376_18 = crc32 i64 2231409791114444147, %Hash_cpp_265_16
  %Hash_cpp_380_19 = rotr i64 %Hash_cpp_376_18, 32
  %Hash_cpp_380_20 = xor i64 %Hash_cpp_375_17, %Hash_cpp_380_19
  %Hash_cpp_380_21 = mul i64 %Hash_cpp_380_20, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_23 = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_15, %Hash_cpp_380_21)
  %ChainingHashTableLogic_cpp_110_24 = isnotnull ptr %ChainingHashTableLogic_cpp_108_23
  condbr %ChainingHashTableLogic_cpp_110_24 %looploopHashChain25 %loopDoneloopHashChain26

looploopHashChain25:
  %hashEntry27 = phi ptr [%ChainingHashTableLogic_cpp_108_23, %else %ChainingHashTableLogic_cpp_136_, %continueProbe22]
  %ChainingHashTableLogic_cpp_115_28 = getelementptr int8 %hashEntry27, i64 16
  %MaterializationHelper_cpp_230_29 = load int32 %ChainingHashTableLogic_cpp_115_28
  %MaterializationHelper_cpp_233_30 = getelementptr int8 %ChainingHashTableLogic_cpp_115_28, i64 4
  %MaterializationHelper_cpp_230_31 = load data128 %MaterializationHelper_cpp_233_30
  %MaterializationHelper_cpp_229_32 = getelementptr int8 %MaterializationHelper_cpp_233_30, i64 16
  %MaterializationHelper_cpp_230_33 = load data128 %MaterializationHelper_cpp_229_32
  %MaterializationHelper_cpp_229_34 = getelementptr int8 %MaterializationHelper_cpp_233_30, i64 32
  %MaterializationHelper_cpp_230_35 = load data128 %MaterializationHelper_cpp_229_34
  %MaterializationHelper_cpp_229_36 = getelementptr int8 %MaterializationHelper_cpp_233_30, i64 48
  %MaterializationHelper_cpp_230_37 = load data128 %MaterializationHelper_cpp_229_36
  %MaterializationHelper_cpp_229_38 = getelementptr int8 %MaterializationHelper_cpp_233_30, i64 64
  %MaterializationHelper_cpp_230_39 = load data128 %MaterializationHelper_cpp_229_38
  %MaterializationHelper_cpp_229_40 = getelementptr int8 %MaterializationHelper_cpp_233_30, i64 80
  %MaterializationHelper_cpp_230_41 = load int64 %MaterializationHelper_cpp_229_40
  %Integer_cpp_83_43 = cmpeq i32 %RelationMappedLogic_cpp_308_14, %MaterializationHelper_cpp_230_29
  %ConsumerContext_cpp_417_44 = not bool %Integer_cpp_83_43
  condbr %ConsumerContext_cpp_417_44 %continueProbe22 %else45

else45:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %SortTranslator_cpp_301_ = call ptr _ZN5umbra12SortOperator10storeTupleEm (%Pipeline_cpp_276_, i64 108)
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%SortTranslator_cpp_301_, %MaterializationHelper_cpp_230_39)
  %MaterializationHelper_cpp_150_ = getelementptr int8 %SortTranslator_cpp_301_, i64 16
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_, %MaterializationHelper_cpp_230_35)
  %MaterializationHelper_cpp_150_46 = getelementptr int8 %SortTranslator_cpp_301_, i64 32
  store int64 %MaterializationHelper_cpp_230_41, %MaterializationHelper_cpp_150_46
  %MaterializationHelper_cpp_150_47 = getelementptr int8 %SortTranslator_cpp_301_, i64 40
  store int32 %MaterializationHelper_cpp_230_10, %MaterializationHelper_cpp_150_47
  %MaterializationHelper_cpp_161_ = getelementptr int8 %SortTranslator_cpp_301_, i64 44
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_161_, %MaterializationHelper_cpp_230_11)
  %MaterializationHelper_cpp_150_48 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 16
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_48, %MaterializationHelper_cpp_230_31)
  %MaterializationHelper_cpp_150_49 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 32
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_49, %MaterializationHelper_cpp_230_33)
  %MaterializationHelper_cpp_150_50 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 48
  call void _ZN5umbra11TextRuntime21storeOwningPersistentEPNS_9data128_tES1_ (%MaterializationHelper_cpp_150_50, %MaterializationHelper_cpp_230_37)
  %SortTranslator_cpp_303_ = call bool _ZN5umbra12SortOperator15finishTopKTupleEv (%Pipeline_cpp_276_)
  br %loopDoneloopHashChain26

continueProbe22:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_15, %hashEntry27)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain25 %loopDoneloopHashChain26

loopDoneloopHashChain26:
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_52 = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_53 = isnotnull ptr %ChainingHashTableLogic_cpp_136_52
  condbr %ChainingHashTableLogic_cpp_137_53 %looploopHashChain %loopDoneloopHashChain

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
  return 68
}

declare int8* @_ZN5umbra12SortOperator10storeTupleEm(object umbra::SortOperator* %49077, int64 %49091)

declare bool @_ZN5umbra12SortOperator15finishTopKTupleEv(object umbra::SortOperator* %49763)

define int32 @_9_planStep54(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 71)
  return 70
}

define int32 @_9_sort_join_join_tablescan_partsupp_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  call void _ZN5umbra12SortOperator9sortLocalEv (%Pipeline_cpp_470_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25968
  call void _ZN5umbra12SortOperator17donateTupleMemoryERS0_ (%Pipeline_cpp_470_, %CompilationContext_cpp_214_)
  br %stepDone

stepDone:
  return 71
}

declare void @_ZN5umbra12SortOperator9sortLocalEv(object umbra::SortOperator* %50584)

declare void @_ZN5umbra12SortOperator17donateTupleMemoryERS0_(object umbra::SortOperator* %50666, object umbra::SortOperator* %50680)

define int32 @_9_planStep55(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25968
  call void _ZN5umbra12SortOperator17prepareSortGlobalEPvPKv (%CompilationContext_cpp_214_, %state, global %50824)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 25968
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_ (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 73)
  return 72
}

declare void @_ZN5umbra12SortOperator17prepareSortGlobalEPvPKv(object umbra::SortOperator* %50908, int8* %50922, int8* %50936)

declare void @_ZN5umbra12SortOperator18setupGlobalSortJobEPvRS0_(int8* %51077, object umbra::SortOperator* %51091)

define int32 @_9_sort_join_join_tablescan_partsupp_extra56(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %SortTranslator_cpp_252_ = load int32 %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25968
  call void _ZN5umbra12SortOperator10sortGlobalEPvPKvj (%CompilationContext_cpp_214_, %state, global %50824, %SortTranslator_cpp_252_)
  br %stepDone

stepDone:
  return 73
}

declare void @_ZN5umbra12SortOperator10sortGlobalEPvPKvj(object umbra::SortOperator* %51341, int8* %51355, int8* %51369, int32 %51383)

define int32 @_9_planStep57(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25968
  call void _ZN5umbra12SortOperator3Job4initEPvRS0_b (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, bool true)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 32, i32 74, i32 75, i32 76)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 77)
  return 78
}

declare void @_ZN5umbra12SortOperator3Job4initEPvRS0_b(int8* %51635, object umbra::SortOperator* %51649, bool %51663)

define int32 @_9_planStep58(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep59(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep60(int8* %trampoline, int8* %state, int8* %localState) [
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
  %MaterializationHelper_cpp_233_ = getelementptr int8 %CodeGen_hpp_1103_, i64 44
  %MaterializationHelper_cpp_230_6 = load data128 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_229_7 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 16
  %MaterializationHelper_cpp_230_8 = load data128 %MaterializationHelper_cpp_229_7
  %MaterializationHelper_cpp_229_9 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 32
  %MaterializationHelper_cpp_230_10 = load data128 %MaterializationHelper_cpp_229_9
  %MaterializationHelper_cpp_229_11 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 48
  %MaterializationHelper_cpp_230_12 = load data128 %MaterializationHelper_cpp_229_11
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
  call void _ZN5umbra14NumericRuntime6outputERNS_12OutputTargetENS_4TypeEl (ptr 0x55e80b5527c0, i64 432345564428894720, %MaterializationHelper_cpp_230_3)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %53561, i32 1)
  call void _ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55e80b5527c0, i64 720575940798709760, %MaterializationHelper_cpp_230_1)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %53561, i32 1)
  call void _ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55e80b5527c0, i64 720575940798709760, %MaterializationHelper_cpp_230_)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %53561, i32 1)
  call void _ZN5umbra14IntegerRuntime6outputERNS_12OutputTargetENS_4TypeEi (ptr 0x55e80b5527c0, i64 288230376151711744, %MaterializationHelper_cpp_230_5)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %53561, i32 1)
  call void _ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55e80b5527c0, i64 720575940798709760, %MaterializationHelper_cpp_230_6)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %53561, i32 1)
  call void _ZN5umbra11TextRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55e80b5527c0, i64 792633535088295936, %MaterializationHelper_cpp_230_12)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %53561, i32 1)
  call void _ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55e80b5527c0, i64 720575940630937600, %MaterializationHelper_cpp_230_8)
  call void _ZN5umbra16RuntimeFunctions17printStringResultEPKcj (global %53561, i32 1)
  call void _ZN5umbra11TextRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x55e80b5527c0, i64 792633536111706112, %MaterializationHelper_cpp_230_10)
  call void _ZN5umbra16RuntimeFunctions13printNlResultEv ()
  atomicstore int8 i8 0, %CompilationContext_cpp_214_
  call void _ZN5umbra16RuntimeFunctions15bumpResultValueEPv (%state)
  %SortTranslator_cpp_341_ = getelementptr int8* %tuple, i32 1
  %SortTranslator_cpp_342_ = cmpne ptr %SortTranslator_cpp_341_, %SortTranslator_cpp_326_0
  condbr %SortTranslator_cpp_342_ %loopTuples %loopDoneTuples

loopDoneTuples:
  br %stepDone

stepDone:
  return 77
}

declare int8 @_ZN5umbra16RuntimeFunctions12lockSpinlockEPvh(int8* %53352, int8 %53366)

declare void @_ZN5umbra14NumericRuntime6outputERNS_12OutputTargetENS_4TypeEl(object umbra::OutputTarget* %53493, int64 %53507, int64 %53521)

declare void @_ZN5umbra16RuntimeFunctions17printStringResultEPKcj(int8* %53583, int32 %53597)

declare void @_ZN5umbra11CharRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %53647, int64 %53661, data128 %53675)

declare void @_ZN5umbra14IntegerRuntime6outputERNS_12OutputTargetENS_4TypeEi(object umbra::OutputTarget* %53799, int64 %53813, int32 %53827)

declare void @_ZN5umbra11TextRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %53951, int64 %53965, data128 %53979)

declare void @_ZN5umbra16RuntimeFunctions13printNlResultEv()

declare void @_ZN5umbra16RuntimeFunctions15bumpResultValueEPv(int8* %54186)

define int32 @_9_planStep61(int8* %trampoline, int8* %state, int8* %localState) [
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
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_1)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 368
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_2)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_3)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 512
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_4)
  %CompilationContext_cpp_214_5 = getelementptr int8 %state, i64 608
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_5)
  %CompilationContext_cpp_214_6 = getelementptr int8 %state, i64 704
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_6)
  %CompilationContext_cpp_214_7 = getelementptr int8 %state, i64 800
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_7)
  %CompilationContext_cpp_214_8 = getelementptr int8 %state, i64 848
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_8)
  %CompilationContext_cpp_214_9 = getelementptr int8 %state, i64 944
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_9)
  %CompilationContext_cpp_214_10 = getelementptr int8 %state, i64 992
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_10)
  %CompilationContext_cpp_214_11 = getelementptr int8 %state, i64 1088
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_11)
  %CompilationContext_cpp_214_12 = getelementptr int8 %state, i64 1136
  call void _ZN5umbra17AggregationTarget7destroyEPS0_ (%CompilationContext_cpp_214_12)
  %CompilationContext_cpp_214_13 = getelementptr int8 %state, i64 25728
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_13)
  %CompilationContext_cpp_214_14 = getelementptr int8 %state, i64 25776
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_14)
  %CompilationContext_cpp_214_15 = getelementptr int8 %state, i64 25872
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_15)
  %CompilationContext_cpp_214_16 = getelementptr int8 %state, i64 25920
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_16)
  %CompilationContext_cpp_214_17 = getelementptr int8 %state, i64 25968
  call void _ZN5umbra12SortOperator7destroyEPS0_ (%CompilationContext_cpp_214_17)
  return 0
}

declare void @_ZN5umbra14RelationMapped6Reader7destroyEPv(int8* %54608)

declare void @_ZN5umbra17ChainingHashTable7destroyEPv(int8* %54760)

declare void @_ZN5umbra17AggregationTarget7destroyEPS0_(object umbra::AggregationTarget* %55536)
`;
